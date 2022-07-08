import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import NoteItem from './src/components/NoteItem/NoteItem';
import Notes from './src/components/Notes/Notes';

class App extends Component {

  render () {
    return (
      <View style={styles.container}>
        <Notes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
});

export default App;
