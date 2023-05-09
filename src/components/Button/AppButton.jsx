import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import styles from './styles'
import appTheme from '../../../constants/theme'

const AppButton = ({ onPress, label, style, color, labelStyle }) => {	
	const buttonContainerStyle = {
		...styles.buttonContainer,
		backgroundColor: color ? appTheme.colors[color] : appTheme.colors.primary
	}
	const buttonTextStyle = {
		...styles.buttonText,
		color: color === 'light' ? '#000' : '#fff'
	}
	return (
		<TouchableOpacity onPress={onPress} style={[buttonContainerStyle, style]} >
			<Text style={[buttonTextStyle, labelStyle]}>{label}</Text>
		</TouchableOpacity>
	)
}



export default AppButton