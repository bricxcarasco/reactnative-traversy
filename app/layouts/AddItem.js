import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
    const [text, setText] = useState("");
    
    const onChange = (textValue) => {
        setText(textValue);
    }

    const saveItem = () => {
        if (!text) {
            Alert.alert("Error", "Please enter an item", {
                text: "Ok"
            });
        } else {
            addItem(text);
            setText("");
        }
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                value={text}
                onChangeText={onChange}
                placeholder="Add Item..."/>
            <TouchableOpacity style={styles.button} onPress={saveItem}>
                <Text style={styles.buttonText}>
                    <Icon name="plus" size={20}/> Add Item
                </Text>
            </TouchableOpacity>
        </View>
    );
}
 
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 9,
        fontSize: 16
    },
    button: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5
    },
    buttonText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: "center"
    }
});

export default AddItem;