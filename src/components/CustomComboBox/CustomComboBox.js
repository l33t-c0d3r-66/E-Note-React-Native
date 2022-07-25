import React from 'react';
import { View, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

const CustomComboBox = (props) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Uncategorized', value: 'uncategorized'},
      {label: 'Work', value: 'work'},
      {label: 'Personal', value: 'personal'},
      {label: 'Family Affair', value: 'family'},
      {label: 'Study', value: 'study'},
    ]);

    return (
      <View style={styles.container}>
        <DropDownPicker style={styles.dropDown}
            placeholder={props.placeholder}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: '85%',
  },
  dropDown : {
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 30,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: "100%",
    maxHeight: 120,
  },
});



export default CustomComboBox;