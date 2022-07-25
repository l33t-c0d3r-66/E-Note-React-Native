import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import CustomTextInput from '../components/CustomTextInput/CustomTextInput';
import CustomTextArea from '../components/CustomTextArea/CustomTextArea';

const AddNoteScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContiner}>
                <Image source={require('../assets/notes.png')} style={styles.image}/>
            </View>
            <View style={styles.textInputContainer}>
                <CustomTextInput placeholder="Enter Note Title" />
                <CustomTextArea style={styles.textArea} placeholder="Enter Description" />
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
    }
  });

  export default AddNoteScreen;