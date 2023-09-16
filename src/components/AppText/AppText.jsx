import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import appTheme from '../../../constants/theme'

const AppText = ({ children, variant, color, fontWeight, style }) => {
	let textColor = '#000'
	if (appTheme.colors[color]){
		textColor = appTheme.colors[color]
	}
	else if (color){
		textColor = color
	}
	const textStyle = {
		...styles.textStyle,
		color: textColor,
		fontSize: appTheme.fontSizes[variant] ? appTheme.fontSizes[variant] : appTheme.fontSizes['body'],
		fontWeight:fontWeight
	}

  return (
	  <Text style={[textStyle, style]}>{children}</Text>
  )
}

export default AppText