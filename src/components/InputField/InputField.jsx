import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import appTheme from '../../../constants/theme'

const InputField = ({ label, icon, inputType, keyboardType, fieldButtonIcon ,fieldButtonLabel, fieldButtonLabelStyle , fieldButtonFunction, inputStyle, style }) => {
  return (
	<View style={[styles.inputContainer, style]}>
		{icon ? icon : ''}
		{inputType === 'password' 
		? (
			<TextInput 
			placeholder={label}
			style={[styles.textInput, inputStyle]} 
			keyboardType={keyboardType}
			secureTextEntry={true}
			/>
		)
		: (
			<TextInput 
			placeholder={label}
			style={[styles.textInput, inputStyle]} 
			keyboardType={keyboardType}
			/>
		)}

		{fieldButtonIcon
		? (
			<TouchableOpacity onPress={fieldButtonFunction}>
				{fieldButtonIcon}
			</TouchableOpacity>
		) : ''
		}

		{fieldButtonLabel
		? (
			<TouchableOpacity onPress={fieldButtonFunction}>
				<Text style={[styles.link, fieldButtonLabelStyle]}>{fieldButtonLabel}</Text>
			</TouchableOpacity>
		)
		: '' 
		}
	</View>
  )
}

const styles = StyleSheet.create({
	inputContainer:{
		flexDirection:'row',
		alignItems:'center',
		borderBottomColor:'#737373',
		borderBottomWidth:1,
	},
	textInput:{
		flex:1,
		paddingVertical:0,
		fontSize: appTheme.fontSizes.body
	},
	link:{
		color: appTheme.colors.dark,
		fontWeight:'500'
	},
})

export default InputField