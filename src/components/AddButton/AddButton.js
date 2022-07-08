import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const AddButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.add}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
    add: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default AddButton;