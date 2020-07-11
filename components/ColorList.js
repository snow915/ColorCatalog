import React, {useState} from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import ColorButton from "./ColorButton";
import ColorForm from "./ColorForm";
import {useColors} from "../hooks.js"


export default function ColorList() {
    const [backgroundColor, setBackgroundColor] = useState("white")
    const {colors, addColor} = useColors(); //Capture colors in the addColor function from my useColors hook
    return (
        <>
            <ColorForm onNewColor={addColor}/>
            <FlatList style={[styles.container, {backgroundColor}]}
                      data={colors}
                      renderItem={({item}) => {
                          return (
                              <ColorButton key={item.id} backgroundColor={item.color} onPress={setBackgroundColor}/>
                          )
                      }}
            />
        </>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    }
});
