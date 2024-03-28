import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IdolPage from './IdolPage.js';
import { idolDB } from './idolDB.js';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Button, TextInput, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function VotePage({ navigation }) {

    const [searchText, setSearchText] = useState(''); // 검색 텍스트 상태 추가

    const filteredIdols = Object.entries(idolDB).filter(([key, idol]) =>
      idol.name.toLowerCase().includes(searchText.toLowerCase()) ||
      idol.agency.toLowerCase().includes(searchText.toLowerCase())
  );
  
    const highlightText = (text, highlight) => {
      if (!highlight.trim()) {
        return <Text>{text}</Text>;
      }
      const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
      return (
        <Text>
          {parts.map((part, index) => (
            part.toLowerCase() === highlight.toLowerCase() ?
            <Text key={index} style={{color: 'blue'}}>{part}</Text> :
            part
          ))}
        </Text>
      );
    };

    return(
    

    <View style={Homestyles.Artistpage}>
                <View style={Homestyles.Artisthead}>
            <Text style={Homestyles.ArtistheadTitle}>FANPICK RANKING</Text>
            <TextInput
            style={Homestyles.textinput}
            placeholder="아티스트 이름을 입력하세요."
            onChangeText={setSearchText}
            value={searchText}
            />
            </View>
            <ScrollView>
            <View style={Homestyles.Artistcontents}>
            {filteredIdols.length > 0 ? (
                filteredIdols.map(([key,idol], index) => (
                <TouchableHighlight key={index} underlayColor="#F5F5F5" onPress={() => navigation.navigate('IdolPage', { idolId: key })}>
                    <View style={Homestyles.profile}>
                    <Image source={idol.profilePicture} style={Homestyles.profilePic} />
                    <View style={Homestyles.idolinfo}>
                        <View style={Homestyles.idolname}>
                        {highlightText(idol.name, searchText)}
                        </View>
                        <View style={Homestyles.idolagency}>
                        {highlightText(idol.agency, searchText)}
                        </View>
                    </View>
                    </View>
                </TouchableHighlight>
                ))
            ) : (
                <Text style={{ textAlign: 'center', marginTop: 20 }}>검색 결과가 없습니다.</Text>
            )}
            </View>
        </ScrollView>
        </View>
    )
}

const Homestyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      
    },
    text: {
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding:5,
      borderBottomWidth: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    Homepage:{
      justifyContent: 'center',
      alignItems: 'center',
    },
    Artistpage:{
      flex:1,
      justifyContent: 'space-between',
      marginBottom:10,
    },
    container2: {
      flex: 1, // 남은 공간을 모두 사용
      justifyContent: 'space-between', // sideheader와 sidebar 사이에 공간 배분
  
    },
    sidebar: {
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      height: 60,
      bottom: 15,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      flexDirection: 'row',
    },
    sidebarButton:{
      flex: 1, 
      alignItems: 'center',
    },
    button:{
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 80, // `sidebar` 높이와 간격을 고려하여 조정
      left: 0,
      right: 0,
      height: 50, // 버튼 높이, 필요에 따라 조정
    },
    buttontext:{
      color:"blue",
    },
    sideheader:{
      flexDirection: 'row',
      padding:7,
      justifyContent: 'space-between',
    },
    home:{
      flex:0.5,
      alignItems:"center",
      justifyContent: 'center',
      backgroundColor:"lightblue",
      padding:13,
  
    },
    artist:{
      flex:0.5,
      alignItems:"center",
      justifyContent: 'center',
      backgroundColor:"lightgreen",
      padding:10,
    },
    Artisthead:{
      padding:10,
      paddingLeft:15,
      paddingRight:15,
    },
    ArtistheadTitle:{
      padding:5,
      paddingBottom:15,
    },
    textinput: {
      borderWidth: 1,
      borderColor: 'gray',
      marginBottom: 10,
      borderRadius: 20,
      justifyContent: 'space-between',
      padding:12,
    },
    Artistcontents:{
      flex:1,
      justifyContent: 'space-between',
    },
    profile:{
      flexDirection: 'row', 
      alignItems: 'center', 
      marginBottom: 10,
      padding:5,
      paddingLeft:15,
    },
    profilePic:{ 
      width: 60, 
      height: 60, 
      borderRadius: 100,
      padding:5,
    },
    idolinfo:{
      flex:3,
      marginLeft:10,
    },
    idolname:{
      flex:2,
      justifyContent: 'center',
    },
    idolagency:{
      flex:1,
      justifyContent: 'center',
    },
  });
