import { View, Text } from 'react-native'
import React from 'react'
import AppText from '../components/AppText/AppText'

const AppTextScreen = () => {
  return (
	<View style={{padding:30}}>
	  <AppText variant="sd" fontWeight={400} color="#5454">Header</AppText>
	  <AppText variant="subheader" fontWeight={'bold'}>Subheader</AppText>
	  <AppText variant="body">Body</AppText>
	  <AppText variant="caption">Body</AppText>
	</View>
  )
}

export default AppTextScreen