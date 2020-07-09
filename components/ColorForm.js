import React, {useState, useRef} from "react";
import {StyleSheet, View, Text, TextInput, Button} from "react-native";

export default function ColorForm({onNewColor=f=>f}) {

    const [inputValue, setValue] = useState("")
    const input = useRef()

    return (
        <View style={styles.container}>
            <TextInput
                ref={input} // This refers to this value
                style={styles.txtInput}
                autoCapitalize="none"
                value={inputValue}
                onChangeText={setValue}
                placeholder="Enter a color"
            />
            <Button
                title="Add"
                onPress={() => {
                    input.current.blur(); // blur will disappear the keyboard
                    onNewColor(inputValue)
                    setValue(""); // This will clean the TextInput
                }
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: "row",
        alignItems: "center"
    },
    txtInput: {
        flex: 1,
        borderWidth: 2,
        fontSize: 20,
        margin: 10,
        borderRadius: 5,
        padding: 5
    }
});
