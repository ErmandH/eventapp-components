import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ButtonScreen from '../screens/ButtonScreen';
import StackScreen from '../screens/StackScreen';
import AppTextScreen from '../screens/AppTextScreen';
import InputFieldScreen from '../screens/InputFieldScreen';

const Stack = createNativeStackNavigator();

const ComponentStack = () => {
  return (
	<Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
		<Stack.Screen name='Home' component={HomeScreen} />
		<Stack.Screen name='Button' component={ButtonScreen} />
		<Stack.Screen name='Stack' component={StackScreen} />
		<Stack.Screen name='AppText' component={AppTextScreen} />
		<Stack.Screen name='InputField' component={InputFieldScreen} />
	</Stack.Navigator>
  )
}

export default ComponentStack