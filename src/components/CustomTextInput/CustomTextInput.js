import React, {useRef, useState} from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
    const [text, setText] = useState('');
    const onChangeHandler = (newText) => {
        setText(newText);
        props.setInput(newText);
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder={props.placeholder}   
                onChangeText={newText => onChangeHandler(newText)}
                defaultValue={text}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        width: '85%',
    },
    textInput : {
        paddingVertical: 5,
        paddingHorizontal: 20,
        backgroundColor: "#FFF",
        borderRadius: 60,
        borderColor: "#C0C0C0",
        borderWidth: 1,
        width: "100%",
    },
});

export default CustomTextInput;