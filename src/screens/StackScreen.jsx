import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppButton from '../components/Button/AppButton'
import Stack from '../components/Stack/Stack'

const StackScreen = () => {
  return (
	<View style={{padding: 10}}>
		<Text style={{ fontSize:30 }}>Row direction stack</Text>
		<Stack style={{ backgroundColor:'#f00', padding:10}} direction='row' spacing={3}>
			<View style={styles.box}></View>
			<View style={styles.box}></View>
			<View style={styles.box}></View>
		</Stack>
		<Text style={{ fontSize:30 }}>Column direction stack</Text>
		<Stack style={{ backgroundColor:'#f00', padding:10}} direction='column' spacing={3}>
			<View style={styles.box}></View>
			<View style={styles.box}></View>
			<View style={styles.box}></View>
		</Stack>
	</View>
  )
}

const styles = StyleSheet.create({
	box:{
		backgroundColor:'#f0f',
		height:100,
		width:100,
	},
})

export default StackScreen