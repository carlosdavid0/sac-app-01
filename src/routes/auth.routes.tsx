// In App.js in a new project

import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeAuth from '@screens/auth/Home';
import { Login, LoginPassword } from '@screens/auth/Login';


const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animationTypeForReplace: 'push'
            }}
        >
            <Stack.Screen name="Home" component={HomeAuth} />
            <Stack.Screen name="Login-documento" component={Login} />
            <Stack.Screen name="Login-senha" component={LoginPassword} />
        </Stack.Navigator>
    );
}

