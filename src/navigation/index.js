import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Home,
    Signup,
    Login,
    Payment,
    Chat
} from './screens';
const Stack = createNativeStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Home" component={Home} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Signup" component={Signup} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Login" component={Login} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Payment" component={Payment} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="Chat" component={Chat} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}