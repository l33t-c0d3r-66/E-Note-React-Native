import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CustomButton = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onAdd}>
            <Text style={styles.add}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: 200,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#C0C0C0",
        borderWidth: 1,
    },
    add: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#55BCF6'
    }
});

export default CustomButton;