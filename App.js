import * as React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IdolPage from './IdolPage.js';
import { styles } from './styles.js';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <Text style={styles.text}>This is for ETH SEOUL!</Text>
      <Button
        title="This is button for idolpage"
        onPress={() => navigation.navigate('IdolPage')}
      />
=======
      <Text>It's for ETH SEOUL</Text>
      <StatusBar style="auto" />
>>>>>>> 75c37ac24853512d1ca5ff450ebc383a98c59f20
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="IdolPage" component={IdolPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
