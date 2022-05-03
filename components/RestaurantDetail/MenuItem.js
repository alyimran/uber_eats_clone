import { View, Text, StyleSheet , Image, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckBox from "react-native-bouncy-checkbox"
import {useDispatch, useSelector} from "react-redux"

const foods = [
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
    {
      title: "Tandoori Chicken",
      description:
        "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
      price: "$19.20",
      image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
    },
    {
      title: "Chilaquiles",
      description:
        "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
      price: "$14.50",
      image:
        "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
    },
    {
      title: "Chicken Caesar Salad",
      description:
        "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
      price: "$21.50",
      image:
        "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
    },
    {
      title: "Lasagna",
      description: "With butter lettuce, tomato and sauce bechamel",
      price: "$13.50",
      image:
        "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
    },
  ];


  

export default function MenuItem({restaurantName}) {
  const dispatch = useDispatch()
  const selectItem = (item , checkboxValue) => dispatch({
    type: 'ADD_TO_CART',
    payload : {...item , restaurantName : restaurantName , checkboxValue:checkboxValue}
  })

  const cartitems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartitems) =>
  Boolean(cartitems.find((item)=> item.title == food.title))
  
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index)=>( 
      <View key={index}>  
      <View style = {styles.menuItemStyle}>
        <BouncyCheckBox
        iconStyle={{borderColor:"lightGrey" , borderRadius:0}}
        fillColor="green"
        onPress={(checkboxValue)=> selectItem(food , checkboxValue)}
        isChecked= {isFoodInCart(food, cartitems)}
        />
      <FoodInfo food= {food}/>
      <FoodImage image = {food.image}/>
    </View>
    <Divider width={.5} orientation="vertical"
    style = {{marginHorizontal:20}}/>
    </View>
    ))}
    </ScrollView>
  )
}

const FoodInfo = (props) =>(
<View style= {{width:180, justifyContent:'space-evenly'}}>
    <Text style = {styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
</View>
);

const FoodImage = (props) => (
    <Image style={{width:100, height:100, borderRadius:8}} source = {{uri:props.image}}/>
)

const styles = StyleSheet.create({
    menuItemStyle : {
        flexDirection:'row',
        justifyContent:'space-between',
        margin:15,
    },
    titleStyle:{
        fontSize:19,
        fontWeight:"600"
    }
})