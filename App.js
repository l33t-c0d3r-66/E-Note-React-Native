import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotesScreen from './src/screens/NotesScreen';
import AddNoteScreen from './src/screens/AddNoteScreen';

class App extends Component {


  render () {
    const Stack =  createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Notes">
          <Stack.Screen name="Notes" component={NotesScreen}/>
          <Stack.Screen name="Add" component={AddNoteScreen} options={{ title: 'Add Note' }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}



export default App;
