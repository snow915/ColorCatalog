import React, {useState} from 'react';
import {
    StyleSheet,
    FlatList
} from 'react-native';
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";
import ColorButton from "./components/ColorButton";
import ColorForm from "./components/ColorForm";
import {generate} from "shortid"; // This will generate a unique ID (npm i shortid)

//Hooks separate functionality from the presentation
const useColors = () => {
    const [colors, setColors] = useState([]);
    const addColor = color => {
        const newColor = {id: generate(), color}
        setColors([newColor, ...colors]); // ...colors for add the rest of the color at the end of the array
    };
    return {colors, addColor} //Expose the list of colors in the addColor function to the consumer of this hook
}

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
