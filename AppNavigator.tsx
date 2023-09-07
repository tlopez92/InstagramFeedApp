import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from './screens/feedscreen'

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    const stackNavigator = (
        <Stack.Navigator>
            <Stack.Screen name="Feed" component={FeedScreen} />
        </Stack.Navigator>
    );
    
    return (
        <NavigationContainer children={stackNavigator} />
    );
};

export default AppNavigator;
