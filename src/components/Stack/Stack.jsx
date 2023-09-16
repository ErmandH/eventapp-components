import React from 'react'
import { View } from 'react-native';

const Stack = ({ spacing, children, style, direction }) => {
  if (!children) { return null }
  const containerStyle = {
	flexDirection: direction ? direction : 'row',
	...style
  }
  if (children.length === undefined) {
    return (
      <View style={containerStyle}>
        {children}
      </View>
    )
  }
  const space = spacing ? spacing * 6 : 6
  const spacedChdilren = children.map((child, index) => {
    if (direction === 'column'){
      return index > 0  
      ? React.cloneElement(child, {style: {...child.props.style, marginTop: space, key:index}}) 
      : child
    }
    else {
      return index > 0  
      ? React.cloneElement(child, {style: {...child.props.style, marginLeft: space, key:index}}) 
      : child
    }
  })
  return (
   <View style={containerStyle}>
    {spacedChdilren}
   </View>
  )
}

export default Stack