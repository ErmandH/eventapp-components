import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ComponentStack from './src/stack/ComponentStack';

export default function App() {
  return (
    <NavigationContainer>
      <ComponentStack/>
    </NavigationContainer>
  );
}


