//IdolPage.js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const userData = [
    { id: '1', name: 'user1', value: 55 },
    { id: '2', name: 'user2', value: 50 },
    { id: '3', name: 'user3', value: 45 },
    { id: '4', name: 'user4', value: 40 },
    { id: '5', name: 'user5', value: 35 },
    { id: '6', name: 'user6', value: 30 },
    { id: '7', name: 'user7', value: 25 },
    { id: '8', name: 'user8', value: 20 },
    { id: '9', name: 'user9', value: 15 },
    { id: '10', name: 'user10', value: 10 },
  ];

export default function IdolPage () {
return (
  <View style={idolpagestyles.container}>
    {/* 상단 부분 */}
    <View style={idolpagestyles.topSection}>
        <View style={idolpagestyles.starContainer}>
        <Text style={idolpagestyles.starText}>1</Text>
        </View>
        <Image
        style={idolpagestyles.profileImage}
        source={require('../Image/ProfileImage1.jpg')}
        />
        <Text style={idolpagestyles.profileName}>Kim Chaewon</Text>
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

