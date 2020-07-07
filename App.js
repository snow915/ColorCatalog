import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";


export default function App() {

    const [backgroundColor, setBackgroundColor] = useState("white")

    return (
        <View style={[styles.container, {backgroundColor}]}>
            <Text style={styles.button} onPress={() => setBackgroundColor("green")}>Green</Text>
            <Text style={styles.button} onPress={() => setBackgroundColor("red")}>Red</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
        fontSize: 30,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        textAlign: "center",
    }
});