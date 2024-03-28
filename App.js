//App.js
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { idolDB } from './pages/idolDB.js';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Button, TextInput, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import HomeScreen from './pages/MainPage.js'; // 가정한 메인 페이지
import IdolPage from './pages/IdolPage.js';
import ChatPage from './pages/ChatPage.js';
import UserPage from './pages/UserPage.js';
import VotePage from './pages/VotePage.js';
import LoginPage from './pages/LoginPage.js'; 

const Stack = createNativeStackNavigator();


function AppStack() {
  const { user } = useAuth(); // AuthContext에서 user 상태를 가져옴

  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName={user ? "MainPage" : "LoginPage"}>
        <Stack.Screen name="MainPage" component={HomeScreen} />
        <Stack.Screen name="IdolPage" component={IdolPage} />
        <Stack.Screen name="ChatPage" component={ChatPage} />
        <Stack.Screen name="UserPage" component={UserPage} />
        <Stack.Screen name="VotePage" component={VotePage} />
        <Stack.Screen name="LoginPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default function App() {

  return (
    <AuthProvider>
      <AppStack />
    </AuthProvider>
  );
  
}

