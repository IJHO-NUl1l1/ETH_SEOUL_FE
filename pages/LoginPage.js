// LoginPage.js
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Web3 from 'web3'; // Web3 라이브러리를 사용, 실제 연동시 라이브러리에 따라 변경 필요

const LoginPage = ({ navigation }) => {
  // 웹3 지갑 연결 함수
  const connectWallet = async () => {
    try {
      // 이 부분은 사용하는 웹3 지갑 연동 라이브러리와 웹3 지갑에 따라 다르게 구현됩니다.
      // 예를 들어, MetaMask 또는 WalletConnect를 사용하는 경우 해당 SDK의 연결 로직을 구현합니다.
      const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
      const accounts = await web3.eth.requestAccounts();
      const account = accounts[0];

      // 여기서 로그인 성공 처리를 합니다. 예를 들어, 상태 관리 라이브러리에 사용자의 지갑 주소를 저장합니다.
      console.log(`Logged in with address: ${account}`);
      
      // 로그인 성공 후 홈 스크린으로 이동
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      // 에러 처리, 예: 에러 메시지 표시 또는 로그인 페이지 유지
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>웹3 지갑으로 로그인</Text>
      <Button title="지갑 연결" onPress={connectWallet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
  },
});

export default LoginPage;
