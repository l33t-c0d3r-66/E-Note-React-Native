import React, {useEffect, useState} from 'react';
import { View, StyleSheet, Image } from 'react-native';

import CustomTextInput from '../components/CustomTextInput/CustomTextInput';
import CustomTextArea from '../components/CustomTextArea/CustomTextArea';
import CustomComboBox from '../components/CustomComboBox/CustomComboBox';

const ViewNoteScreen = (props) => {
    const [type, setType] = useState("");
    const [note, setNote] = useState({});
    const {key} = props.route.params;

    useEffect(function() {
        console.log(key);
        fetch("https://react-native-projects-4701f-default-rtdb.firebaseio.com/notes/"+key+".json")
        .then(response => {
            return response.json();
        }).then(res => {
            console.log(res);
            setNote(res);
        }).catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.imageContiner}>
                <Image source={require('../assets/notes.png')} style={styles.image}/>
            </View>
            <View style={styles.textInputContainer}>
                <CustomTextInput placeholder="Enter Note Title" value={note.title}/>
                <CustomComboBox placeholder="Select Note Type" setComboValue={setType} value={note.type}/>
                <CustomTextArea style={styles.textArea} placeholder="Enter Description" value={note.description} />
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

  export default ViewNoteScreen;