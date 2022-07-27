import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NoteItem from '../NoteItem/NoteItem';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import AddButton from '../AddButton/AddButton';
const Notes = (props) => {
    const notes = [
        {title: 'Note Title', description: 'Notes Description', type: 'work'},
    ];

    const addNote = () => {
        
    }


    return (
        <View style={styles.notesWrapper}>
          <View style={styles.topBar}>
            <CustomTextInput placeholder="Search here" />
            <AddButton navigation={props.navigation}/>
          </View>
          <View style={styles.items}>
            {notes.map((note, index) => (<NoteItem key={index} title={note.title} description={note.description} type={note.type}  />))}
          </View>
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
    },
});

export default Notes;