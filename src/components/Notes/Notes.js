import React, {useState, useEffect} from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import NoteItem from '../NoteItem/NoteItem';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import AddButton from '../AddButton/AddButton';

const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    useEffect(function(){
        fetch("https://react-native-projects-4701f-default-rtdb.firebaseio.com/notes.json")
        .then(response => {
            return response.json();
        }).then(res => {
            const notesFromFirebase = [];
            Object.keys(res).forEach((key) => {
                const note = {
                    key: key,
                    ...res[key]
                }
                notesFromFirebase.push(note);
            });
            setNotes(notesFromFirebase);
        }).catch(error => {
            console.log(error);
        });
    },[notes]);
    return (

        <View style={styles.notesWrapper}>
          <View style={styles.topBar}>
            <CustomTextInput placeholder="Search here" />
            <AddButton navigation={props.navigation}/>
          </View>
          <ScrollView style={styles.items}>
            {notes.length>0?notes.map((note, index) => (<NoteItem key={note.key} title={note.title} description={notes[index].description} type={notes[index].type}  />)): null}
          </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    notesWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    topBar: {
        position: 'absolute',
        top: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginLeft: 20,
        padingRight: 10,
    }, 
    sectionTitle : {
        fontSize:24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    items: {
        marginTop: 50,
        paddingHorizontal: 10
    },
});

export default Notes;