import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NoteItem =  (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={[styles.square, {backgroundColor: props.color || "#55BCF6"}]}></View>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.description}>
                        {props.description.length > 50? props.description.substring(0, 50)+"...": props.description}
                    </Text>
                </View>
            </View>
            <View style={[styles.circular, {backgroundColor: props.color || "#55BCF6"}]}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    square: {
        width: 60,
        height: 60,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10,
    },
    wrapper: {
        flexDirection: 'column',
    },  
    title: {
        maxWidth: "80%",
        fontSize: 15,
        fontWeight: 'bold'
    },
    description: {
        maxWidth:'80%',

    },
    circular: {
        height: 20,
        width: 20,
        borderColor: "#55BCF6",
        borderWidth: 2,
        borderRadius: 10,
    }
});

export default NoteItem;