import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  View, ActivityIndicator, ProgressBarAndroid, Button } from 'react-native';

export default function App() {

  const onButtonPress = () => {
    console.log(`${new Date().toLocaleDateString()} button press`)
  }

  return (
    <View style={{padding: 50}}>
      <ActivityIndicator size="large" color="#61DBFB"/>
      <ProgressBarAndroid progress={0.5}/>
      <Button title="Click me" onPress={onButtonPress}/>
    </View>
  );
}