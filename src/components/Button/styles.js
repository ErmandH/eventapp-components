import { StyleSheet } from "react-native";
import theme  from '../../../constants/theme'

const styles = StyleSheet.create({
	buttonContainer:{
		backgroundColor:theme.colors.primary,
		padding:10,
		borderRadius:10,
		justifyContent:'center',
		alignItems:'center'
	},
	buttonText:{
		color:'#fff',
		fontSize:theme.fontSizes.body,
		fontWeight:600
	},
});

export default styles