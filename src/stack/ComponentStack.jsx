import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ButtonScreen from '../screens/ButtonScreen';
import StackScreen from '../screens/StackScreen';

const Stack = createNativeStackNavigator();

const ComponentStack = () => {
  return (
	<Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
		<Stack.Screen name='Home' component={HomeScreen} />
		<Stack.Screen name='Button' component={ButtonScreen} />
		<Stack.Screen name='Stack' component={StackScreen} />
	</Stack.Navigator>
  )
}

export default ComponentStack