import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Dimensions
} from 'react-native';

import cat1 from "./assets/cat1.jpg"
import cat2 from "./assets/cat2.jpg"

export default function App() {

    return (
        <View style={styles.page}>
            <Image style={styles.image} source={cat1}/>
            <Image style={styles.image} source={cat2}/>
        </View>
    );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  image: {
      flex: 1,
      borderRadius: 50,
      margin: 10,
      width: Dimensions.get("window").width - 10
  }
});