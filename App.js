import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    ScrollView,
    Keyboard,
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert,
} from "react-native";
import Task from "./components/Task";

export default function App() {
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask(null);
    };

    const compleTask = (index) => {
        Alert.alert(
            "Delete Task",
            "Are you sure you want to delete this task?",
            [
                {
                    text: "yes",
                    onPress: () => {
                        let itemsCopy = [...taskItems];
                        itemsCopy.splice(index, 1);

                        setTaskItems(itemsCopy);
                    },
                },
                { text: "no" },
            ]
        );
    };

    return (
        <View style={styles.container}>
            {/* Content is only on the safe area(below the statusbar and other things)  */}
            {/* <SafeAreaView></SafeAreaView> */}
            <ScrollView style={styles.taskWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <View style={styles.items}>
                    {taskItems.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => compleTask(index)}
                            >
                                <Task text={item} />
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.writeTaskWrapper}
            >
                <TextInput
                    style={styles.input}
                    placeholder={"Write a Task"}
                    value={task}
                    onChangeText={(text) => setTask(text)}
                />

                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.addButton}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e8eaed",
        alignItems: "center",
        justifyContent: "center",
    },
    taskWrapper: {
        flex: 1,
        width: "100%",
        padding: 20,
    },
    sectionTitle: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 32,
        marginTop: 80,
    },
    items: {
        paddingTop: 20,
    },

    writeTaskWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 60,
        paddingHorizontal: 20,
        width: "100%",
    },

    input: {
        flex: 1,
        textAlign: "center",
        backgroundColor: "#fff",
        borderRadius: 60,
        padding: 15,
        marginRight: 20,
        shadowOffset: {
            height: 4,
            width: 0,
        },
        shadowOpacity: 0.15,
        shadowRadius: 30,
        shadowColor: "#000",
    },
    addButton: {
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    addText: {
        fontSize: 32,
        fontWeight: "200",
        color: "#C0C0C0",
    },
});
