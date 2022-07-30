import React  from 'react';
import { View, StyleSheet } from 'react-native';
import Notes from '../components/Notes/Notes';
const NotesScreen = (props) => {

    return (
        <View style={styles.container}>
            <Notes navigation={props.navigation}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: "#E8EAED",
    },
  });

  export default NotesScreen;