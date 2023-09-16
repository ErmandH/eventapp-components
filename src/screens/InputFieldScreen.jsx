import { View, Text } from 'react-native'
import React from 'react'
import InputField from '../components/AppTextInput/InputField'
import Ionicons from '@expo/vector-icons/Ionicons';
import Stack from '../components/Stack/Stack';
const InputFieldScreen = () => {
  return (
	<Stack style={{ padding:30 }} direction={'column'} spacing={6}>
	  <InputField
		icon={<Ionicons name="md-checkmark-circle" size={32} color="green" />}
	  label='email' inputType='email' keyboardType='email-address' fieldButtonLabel={'selam'} />
	  <InputField
		icon={<Ionicons name="md-checkmark-circle" size={32} color="green" />}
		fieldButtonIcon={<Ionicons name="md-checkmark-circle" size={32} color="green" />}
	  label='email' inputType='email' keyboardType='email-address'  />

	<InputField
		
		fieldButtonIcon={<Ionicons name="md-checkmark-circle" size={32} color="green" />}
	  label='email' inputType='email' keyboardType='email-address' containerStyle={{  }} 
	 	inputStyle={{ color:'black' }} 
	  />
	</Stack>
  )
}

export default InputFieldScreen