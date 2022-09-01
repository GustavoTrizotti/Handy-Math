import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, TextInput } from "react-native";
import DropdownInput from "../../DropdownInput.js";

import * as Animatable from 'react-native-animatable';
import { useState } from 'react';

export default function Home() {

    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    function verifySignUp() {
        if (username == "" && email == "" && password == "") {
            alert("Fill all the fields!");
        } else if (username == "") {
            alert("Username is required!");
        } else if (email == "") {
            alert("Email is required!");
        } else if (password == "") {
            alert("Password is required!");
        }
    }

    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View style={styles.containerImage}>
                        <Image 
                        style={{width: 150, height: 150, resizeMode: 'contain', alignSelf: 'center'}}
                        source={require("../../assets/logoDark.png")}
                        />
                    </View>
                    <View>
                        <Text style={styles.title}>Sing-Up</Text>
                    </View>
                    
                    <View style={styles.containerForm}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput 
                            placeholder="Username"
                            style={styles.input}
                            onChangeText={text => setUsername(text)}
                        />
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput 
                            placeholder="E-mail" keyboardType="email-address" autoCapitalize="none"
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                        />
                        <Text style={styles.label}>Password</Text>
                        <TextInput 
                            placeholder="Password" secureTextEntry={true}
                            style={styles.input}
                            onChangeText={text => setPassword(text)}
                        />
                        <Text style={{textAlign: "center", margin: 10, fontSize: 16, fontWeight: 'bold'}}>Function</Text>
                        <DropdownInput/>
                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={verifySignUp}>
                            <Text style={styles.buttonText}>Sign-Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    containerImage: {
        marginTop: 20,
        marginBottom: 10,
        width: 150,
        height: 160,
        alignSelf: 'center',
    },
    containerForm: {
        marginLeft: 20,
        marginRight: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 20,
    },
    input: {
        height: 40,
        width: 300,
        borderBottomWidth: 2,
        borderBottomColor: "#ddd",
        marginLeft: 20,
        marginBottom: 10,
    },
    containerButton: {
        alignItems: "center",
        marginTop: 20,
    },
    button: {
        backgroundColor: "#ff8d36",
        width: "40%",
        height: 40,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        zIndex: -1,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});