import React from "react";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Task(props) {
    return (
        <View style={styles.task}>
            <View style={styles.itemLeft} >
                <View style={styles.square}></View>
                <Text numberOfLines={1}>{props.text}</Text>
            </View>
            
            <View style={styles.circle} >
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    task: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        borderRadius: 10,
        width: "100%",
        padding: 15,
        marginVertical: 10,
        shadowOffset: {
            height: 4,
            width: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 20,
        shadowColor: "#000"
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square:{
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        width: 24,
        height: 24,
        marginRight: 15
    },
    text:{
        maxWidth: '80%'
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 50
    }
});
