import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import FeedScreen from './screens/feedscreen'

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    const stackNavigator = (
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={FeedScreen} />
        </Stack.Navigator>
    );
    
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" />
            {stackNavigator}
        </NavigationContainer>
    );
};

export default AppNavigator;
