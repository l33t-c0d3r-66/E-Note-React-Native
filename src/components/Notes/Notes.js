import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NoteItem from '../NoteItem/NoteItem';
import CustomTextInput from '../CustomTextInput/CustomTextInput';
import AddButton from '../AddButton/AddButton';
const Notes = (props) => {
    return (
        <View style={styles.notesWrapper}>
          <View style={styles.topBar}>
            <CustomTextInput />
            <AddButton navigation={props.navigation}/>
          </View>
          <View style={styles.items}>
            <NoteItem title="Hello" description="Hello World Hello World Hello World fjkasjddsfkdsakjfksdjflkjdsalkfjdsaljfljdsalfjlkflkjdsalkfjdsafjlkdsjflkajdflkjdsalkfj"/>
            <NoteItem title="Hello" description="Hello World Hello World Hello World fjkasjddsfkdsakjfksdjflkjdsalkfjdsaljfljdsalfjlkflkjdsalkfjdsafjlkdsjflkajdflkjdsalkfj"/>
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