import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import EditProfile from './src/Screens/Jobseeker/EditProfile';
import MyProfile from './src/Screens/Jobseeker/MyProfile';
import SignInScreen from './src/Screens/Jobseeker/SignInScreen';
import SuccessScreen from './src/Screens/Jobseeker/SigninSuceessScreen';
import SignupScreen from './src/Screens/Jobseeker/SignupScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SignIn">
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
                <Stack.Screen name="SignupScreen" component={SignupScreen} />
                <Stack.Screen name="MyProfile" component={MyProfile} />
                <Stack.Screen name="EditProfile" component={EditProfile} />  
            </Stack.Navigator>
        </NavigationContainer>
    );
}