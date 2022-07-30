import React from 'react';
import { ProgressViewIOSComponent, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NoteItem =  (props) => {
    const colors = {
        "work": "#FFC18E",
        "personal": "#CA4E79",
        "family": "#AF7AB3",
        "study": "#FBB454",
        "others": "#55BCF6",
    }
    let color = "";

    if(colors[props.type]) {
        color = colors[props.type];
    } else {
        color = colors["others"];
    }

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>{props.title.length>15? props.title.substring(0,15)+"...": props.title}</Text>
                    <Text style={styles.description}>
                        {props.description.length > 50? props.description.substring(0, 50)+"...": props.description}
                    </Text>
                </View>
            </View>
            <View style={[styles.circular, {backgroundColor: color, borderColor: color}]}></View>
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
        marginBottom: 20,
        maxHeight: 120
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'column',
    },  
    title: {
        maxWidth: "80%",
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        maxWidth:'90%',
        flexWrap: 'wrap'
    },
    circular: {
        height: 20,
        width: 20,
        borderWidth: 2,
        borderRadius: 10,
    }
});

export default NoteItem;