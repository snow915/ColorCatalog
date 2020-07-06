import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
    Text,
    View,
    ActivityIndicator,
    ProgressBarAndroid,
    Button,
    Alert,
    Dimensions,
    Platform
} from 'react-native';

const {height, width} = Dimensions.get("window") //Get the dimensions of the screen

export default function App() {

    const onButtonPress = () => {
        Alert.alert(`${new Date().toLocaleTimeString()} button press`)
    }

    return (
        <View style={{padding: 50}}>
          {Platform.OS === "ios" && <ActivityIndicator size="large" color="#61DBFB"/>}
          {Platform.OS === "android" && <ProgressBarAndroid
              styleAttribute="Horizontal"
              indeterminate={false}
              progress={0.5}

          />}
            <Button title="Click me" onPress={onButtonPress}/>
            <Text>Height: {height}</Text>
          <Text>Width: {width}</Text>
            <Text>OS: {Platform.OS}</Text>
        </View>
    );
}