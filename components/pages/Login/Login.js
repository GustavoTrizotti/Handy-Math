import React from "react";
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Login() {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const navigation = useNavigation();

    function verifyLogin() {
        if (email == "" && password == "") {
            alert("Fill all the fields!");
        } else if (email == "") {
            alert("Email is required!");
        } else if (password == "") {
            alert("Password is required!");
        }
    }

    return (
        <KeyboardAvoidingView 
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <View>
                        <Animatable.Text animation="fadeInLeft" delay={200} style={styles.title}>Welcome!</Animatable.Text>
                    </View>
                    <View style={styles.containerForm}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Username or Email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={text => setEmail(text)}
                        />
                        <Text style={styles.label}>Password</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Password"
                            secureTextEntry={true}
                            onChangeText={text => setPassword(text)}
                        />
                        <View style={styles.containerButton}>
                            <TouchableOpacity style={styles.button} onPress={verifyLogin}>
                                <Text style={styles.textButton}>Login</Text>
                            </TouchableOpacity>
                            <Text>
                                Don't have an account? <Text style={styles.textSignUp} onPress={()=>{navigation.navigate('Cadastro')}}>Sign Up</Text>
                            </Text>
                        </View>
                        
                    </View>
                </View>
            </TouchableWithoutFeedback>
            
        </KeyboardAvoidingView> 
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333",
    },  
    title: {
        color: "#fff",
        fontSize: 26,
        marginTop: "10%",
        marginBottom: "10%",
        fontWeight: "bold",
        marginLeft: "5%",
    },
    containerForm: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopEndRadius: 25,
        padding: "5%",
        height: "100%",
    },
    label: {
        fontSize: 16,
        marginTop: "5%",
    },  
    input: {
        borderBottomWidth: 2,
        borderBottomColor: "#ddd",
        fontSize: 16,
        marginTop: "2%",
        marginBottom: "5%",
    },
    containerButton: {
        alignItems: "center",
    },
    button: {
        backgroundColor: "#ff8d36",
        padding: 10,
        width: "90%",
        borderRadius: 5,
        marginTop: "10%",
        marginBottom: "5%",
        justifyContent: "center",
        alignItems: "center",
    },
    textButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },	
    textSignUp: {
        color: "#ff8d36",
    }
});