import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"

export default function Footer() {
  return (
    <View style={{flexDirection:"row" , justifyContent:'space-between',margin:10, marginHorizontal:20}}>
      <Icon icon= "home" text="Home"/>
      <Icon icon= "search" text="Browse"/>
      <Icon icon= "shopping-bag" text="Grocery"/>
      <Icon icon= "receipt" text="Orders"/>
      <Icon icon= "user" text="Account"/>
    </View>
  )
}

const Icon = (props) =>
(
    <TouchableOpacity>
    <FontAwesome5
    name= {props.icon}
    size= {25}
    style={{
        marginBottom:3,
        alignSelf:'center'
    }}/>
    <Text>{props.text}</Text>
    </TouchableOpacity>
)