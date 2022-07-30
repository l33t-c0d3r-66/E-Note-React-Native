import React, {useState} from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const CustomTextArea = (props) => {

    const [text, setText] = useState('');
    const onChangeHandler = (newText) => {
        setText(newText);
        props.setInput(newText);
    }


    return (
        <View style={[styles.container, props.style]}>
            <TextInput style={styles.textInput} placeholder={props.placeholder} 
                multiline={true} numberOfLines={4} 
                onChangeText={newText => onChangeHandler(newText)}
                defaultValue={props.value || text} />
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        width: '85%',
    },
    textInput : {
        paddingHorizontal: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        borderBottomColor: "#C0C0C0",
        borderBottomWidth: 1,
        width: "100%",
        maxHeight: 120
    },
});

export default CustomTextArea;