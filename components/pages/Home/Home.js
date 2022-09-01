import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="fadeIn"
                    source={require('../../assets/logo.png')}
                    style={{ width: "100%", resizeMode: "contain"}}
                />
            </View>

            <Animatable.View 
                animation="fadeInUp"
                style={styles.containerForm}
                >
                <Text style={styles.title}>HANDY MATH</Text>
                <Text style={styles.text}>Log-in to startup!</Text>
                <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Login')}}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.signUp}>
                    Don't have an account? <Text style={styles.textSignUp} onPress={()=>{
                        navigation.navigate('Cadastro')
                    }}>Sign Up</Text>
                </Text>
            </Animatable.View>
        </View>

        
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
    containerLogo: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },  
    containerForm: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopEndRadius: 25,
        paddingStart: "5%",
        paddingEnd: "5%",
    },
    title: {
        color: "#000",
        fontSize: 26,
        marginTop: "10%",
        fontWeight: "bold",
    },
    text: {
        color: "#999",
        fontSize: 14,
        marginTop: 10,
        marginBottom: 20,
    },
    button: {
        position: "absolute",
        borderRadius: 50,
        paddingVertical: 10,
        backgroundColor: "#ff8d36",
        width: "40%",
        alignSelf: "center",
        bottom: "35%",
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    signUp: { 
        color: "#999",
        fontSize: 14,
        position: "absolute",
        alignSelf: "center",
        bottom: "23%",
    },
    textSignUp: {
        color: "#ff8d36",
        fontSize: 14,
        fontWeight: "bold",
    }
})