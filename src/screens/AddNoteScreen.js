import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AddNoteScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Add Note Screeen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor: "#E8EAED",
    },
  });

  export default AddNoteScreen;