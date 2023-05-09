import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
	<View style={styles.container}>
	  <Text style={styles.header}>Components</Text>
	  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Button')}>
		<Text style={styles.buttonText}>Button</Text>
	  </TouchableOpacity>
	  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stack')}>
		<Text style={styles.buttonText}>Stack</Text>
	  </TouchableOpacity>
	</View>
  )
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#fff',
	  alignItems: 'center',
	  justifyContent: 'center',
	},
	header:{
		textAlign:'center',
		fontWeight:'bold',
		fontSize:28
	},
	button:{
		backgroundColor:'#1D267D',
		padding:10,
		borderRadius:10,
		marginTop:8,
		justifyContent:'center',
		alignItems:'center'
	},
	buttonText:{
		color:'#fff',
		fontSize:18,
		fontWeight:600
	},
});

export default HomeScreen