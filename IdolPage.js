//IdolPage.js
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import React from 'react';
import { idolDB } from './idolDB.js';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';


function generateRandomUserData() {
  const userData = [];

  for (let i = 0; i < 10; i++) {
    // 각 사용자에 대한 임의의 데이터 생성
    userData.push({
      id: i, // 실제 애플리케이션에서는 더 의미 있는 고유 ID를 사용해야 할 수 있습니다.
      name: `User ${i + 1}`,
      value: Math.floor(Math.random() * 100) + 1, // 1부터 100 사이의 임의의 값
    });
  }

  return userData;
}

const userData = generateRandomUserData();



function IdolPage({ route }) {
  const { idolId } = route.params;
  const [idolInfo, setIdolInfo] = useState(null);

  useEffect(() => {
    const idolData = idolDB[idolId];
    if (idolData) {
      setIdolInfo(idolData);
    } else {
      console.log('아이돌 정보를 찾을 수 없습니다.');
    }
  }, [idolId]); // idolId가 변경될 때마다 실행

  if (!idolInfo) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
  <View style={idolpagestyles.container}>
    {/* 상단 부분 */}
    <View style={idolpagestyles.topSection}>
        <Image
        style={idolpagestyles.profileImage}
        source={idolInfo.profilePicture}
        />
        <Text style={idolpagestyles.profileName}>{idolInfo.name}</Text>
        <Text style={idolpagestyles.profileAgency}>{idolInfo.agency}</Text>
    </View>
    
    {/* 하단 순위 부분 */}
    <View style={idolpagestyles.bottomSection}>
      <Text style={idolpagestyles.rankTitle}>덕력 순위</Text>
      <View style={idolpagestyles.rank}>
        <ScrollView style={idolpagestyles.rankList}>
            {userData.map((user, index) => (
              <View key={user.id} style={idolpagestyles.rankItem}>
                <Text style={idolpagestyles.rankName}>{user.name}</Text>
                <View style={[idolpagestyles.rankBar, { width: `${user.value}%` }]} />
              </View>
            ))}
        </ScrollView>
        <View style={idolpagestyles.fixedUserRank}>
          <Text style={idolpagestyles.rankName}>me</Text>
          <View style={[idolpagestyles.rankBar]} />
        </View>
      </View>
    </View>
  </View>
  );
};


const idolpagestyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff', // 배경색 설정
    },
    topSection: {
      backgroundColor: "lightblue",
      flex: 1, // 이미지가 상단 절반을 차지하도록 조정
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50, // 상단 여백 조정
      paddingBottom: 20, // 하단 여백 조정
    },
    profileImage: {
      marginTop:-10,
      width: 300, // 이미지 너비 조정
      height: 300, // 이미지 높이 조정
      borderRadius: 150, // 이미지 둥글게 처리
      borderWidth: 4, // 테두리 두께 조정
      borderColor: '#4B7BE5', // 테두리 색상 조정
    },
    starContainer: {
      position: 'absolute',
      top: 16, // 별의 정확한 위치 조정
      left: 16, // 별의 정확한 위치 조정
      backgroundColor: '#ffcc00', // 별의 배경색
      borderRadius: 10, // 별 모양을 둥글게
      padding: 8, // 내부 여백
    },
    starText: {
      color: 'white',
      fontWeight: 'bold',
    },
    profileName: {
      marginTop:50,
      marginTop: 8, // 이름과 이미지 사이의 여백
      fontSize: 24, // 글씨 크기
      fontWeight: 'bold',
      color: 'black',
    },
    bottomSection:{
      flex:1,
    },
    rankTitle: {
      flex:0.1,
      textAlign:"center",
      fontSize: 20, // 제목 글씨 크기
      fontWeight: 'bold',
      color: 'black',
      paddingVertical: 10, // 제목의 수직 여백
    },
    rank:{
      flex:0.5,
    },
    rankList: {
      flex:0.5,
    },
    rankItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 8, // 항목 사이의 여백
      borderBottomWidth: 1, // 항목들 사이의 구분선
      borderBottomColor: '#e1e1e1', // 구분선 색상
    },
    rankName: {
      flex: 1, // 이름이 바를 제외한 모든 공간을 차지하도록
      fontWeight: '500',
      color: 'black',
    },
    rankBar: {
      weight: '50%',
      height: 20, // 바의 높이
      borderRadius: 10, // 바 둥글게 처리
      backgroundColor: '#ff4500', // 바 색상
    },
    fixedUserRank: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', // 내용물을 중앙에 배치
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // 배경색
      paddingHorizontal: 20,
      paddingVertical: 10,

    },
  });

  export default IdolPage;