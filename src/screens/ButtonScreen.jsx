import { View, Text } from 'react-native'
import React from 'react'
import AppButton from '../components/Button/AppButton'
import Stack from '../components/Stack/Stack'

const ButtonScreen = () => {
  return (
	<Stack style={{ flex: 1,padding:10 }} direction='column' spacing={2}>
	  <AppButton label='Button' style={{ borderRadius:0 }} labelStyle={{ color:'#f00', fontWeight:300 }} color='primary' onPress={() => {}} />
	  <AppButton label='Button'  color='secondary' onPress={() => {}} />
	  <AppButton label='Button'  color='dark' onPress={() => {}} />
	  <AppButton label='Button'  color='light' onPress={() => {}} />
	  <AppButton label='Button'  color='red' onPress={() => {}} />
	</Stack>
  )
}

export default ButtonScreen