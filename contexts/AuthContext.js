import React, { createContext, useContext, useState } from 'react';
import { Web3Auth } from "@web3auth/react-native-sdk";
import EncryptedStorage from "react-native-encrypted-storage";
import { ethers } from "ethers"; 
import abi from "./abi";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 사용자 지갑 주소를 저장

  // Web3Auth instance
  let web3auth;

  const connectWallet = async () => {
    try {
      // Initialize Web3Auth
      web3auth = new Web3Auth({
        clientId: "YOUR_CLIENT_ID_HERE", // Get your client ID from Web3Auth Dashboard
        network: "mainnet",
      });

      await web3auth.initModal();

      if (!web3auth.provider) {
        await web3auth.connect();
      }

      const provider = web3auth.provider;
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const signer = ethersProvider.getSigner();
      const address = await signer.getAddress();

      setUser(address); // 지갑 주소로 사용자 설정
    } catch (error) {
      console.error("지갑 연결 실패:", error);
    }
  };

  const disconnectWallet = async () => {
    if (web3auth) {
      await web3auth.logout();
    }
    setUser(null); // 지갑 연결 해제
  };

  const value = { user, connectWallet, disconnectWallet };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
