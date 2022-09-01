import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../pages/Home/Home.js";
import Login from "../pages/Login/Login.js";
import Cadastro from "../pages/Login/Cadastro.js";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options= {{headerShown: false}}
            />
            <Stack.Screen 
                name="Login"
                component={Login}
                options= {{headerShown: false}}
            />
            <Stack.Screen 
                name="Cadastro"
                component={Cadastro}
                options= {{headerShown: false}}
            />
        </Stack.Navigator>
    )
}