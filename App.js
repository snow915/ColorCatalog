import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";

function ColorButton({backgroundColor, onPress=f=>f}){
    return (
        <TouchableHighlight style={styles.button}
                            onPress={() => onPress(backgroundColor)}
                            underlayColor="orange">
            <View style={styles.row}>
                <View style={[styles.sample, {backgroundColor}]}/>
                <Text style={styles.buttonText} >{backgroundColor}</Text>
            </View>
        </TouchableHighlight>
    );
}

export default function App() {

    const [backgroundColor, setBackgroundColor] = useState("white")

    return (
        <View style={[styles.container, {backgroundColor}]}>
            <ColorButton backgroundColor={"red"} onPress={setBackgroundColor}/>
            <ColorButton backgroundColor={"purple"} onPress={setBackgroundColor}/>
            <ColorButton backgroundColor={"yellow"} onPress={setBackgroundColor}/>
            <ColorButton backgroundColor={"blue"} onPress={setBackgroundColor}/>
            <ColorButton backgroundColor={"green"} onPress={setBackgroundColor}/>
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
        margin: 10,
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        alignSelf: "stretch",
        backgroundColor: "rgba(255, 255, 255, .8)"
    },
    buttonText: {
        fontSize: 30,
        textAlign: "center"
    },
    sample: {
        height: 20,
        width: 20,
        backgroundColor: "white",
        borderRadius: 20,
        margin: 10
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    }
});