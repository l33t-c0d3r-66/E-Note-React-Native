import React, {useRef, useState} from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';

import CustomTextInput from '../components/CustomTextInput/CustomTextInput';
import CustomTextArea from '../components/CustomTextArea/CustomTextArea';
import CustomComboBox from '../components/CustomComboBox/CustomComboBox';
import CustomButton from '../components/CustomButton/CustomButton';

const AddNoteScreen = (props) => {
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");

    const onPressHandler = () => {
        const note = {
            title: title,
            description: description,
            type: type
        }

        // Firebase to Add Here

        props.navigation.navigate("Notes");
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContiner}>
                <Image source={require('../assets/notes.png')} style={styles.image}/>
            </View>
            <View style={styles.textInputContainer}>
                <CustomTextInput placeholder="Enter Note Title" setInput={setTitle}/>
                <CustomComboBox placeholder="Select Note Type" setComboValue={setType}/>
                <CustomTextArea style={styles.textArea} placeholder="Enter Description" setInput={setDescription} />
                <CustomButton text="Save Note" onAddHandler={onPressHandler}/>
            </View>   
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#E8EAED",
    },
    imageContiner : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    textInputContainer : {
      flex: 2,
      backgroundColor: "#E8EAED",
      alignItems: 'center',
    },
    textArea: {
        marginTop: 20
    },
    image: {
        width: 130, 
        resizeMode: 'contain',
    },
  });

  export default AddNoteScreen;