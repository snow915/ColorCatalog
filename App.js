import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


export default function App() {

    return (
        <View style={styles.page}>
          <Text style={styles.text}>Red</Text>
          <Text style={[styles.text, styles.selectedText]}>Green</Text>
          <Text style={styles.text}>Blue</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  page : {
    marginTop : 40,
    backgroundColor : "#DDD"
  },
  text: {
    fontSize : 22,
    color: "red",
    backgroundColor: "yellow",
    margin: 10,
    padding: 5
  },
  selectedText: {
    backgroundColor: "red",
    color: "yellow",
  }
});