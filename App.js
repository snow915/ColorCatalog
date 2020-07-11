import React, {useState} from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";
import ColorButton from "./components/ColorButton";
import ColorForm from "./components/ColorForm";
import {useColors} from "./hooks"


export default function App() {
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
