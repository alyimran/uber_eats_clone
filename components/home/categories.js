import { View, Image , Text , ScrollView } from 'react-native'
import React from 'react'

export default function Categories() {
    const items = [
        {
        image:require("../../assets/images/shopping-bag.png"),
        text:"Pick-up"
        },
        {
          image:require("../../assets/images/shopping-bag.png"),
          text:"Pick-up"
          },
        {
            image:require("../../assets/images/bread.png"),
            text:"Bakery Items"
        },
        {
                image:require("../../assets/images/deals.png"),
                text:"Deals"
        },
        {
            image:require("../../assets/images/fast-food.png"),
            text:"Fast Foods"
        },
        {
            image:require("../../assets/images/soft-drink.png"),
            text:"Soft Drinks"
        },
        {
        image:require("../../assets/images/coffee.png"),
        text:"Coffee & Tea"
    },

    ]
  return (
    <View style={{backgroundColor:"white" , paddingVertical:10 , paddingLeft:10}}>
    <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
        {items.map((item, index)=>(
    <View key={index} style = {{alignItems:'center' , marginRight:30}} >
      <Image style={{height:40, width:50 , resizeMode:"contain"}} 
      source={item.image}/>
      <Text style = {{fontWeight:'900'}}>{item.text}</Text>
    </View>))}
    </ScrollView>
    </View>
  )
}