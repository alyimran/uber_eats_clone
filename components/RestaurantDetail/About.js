import { View, Text, Image } from 'react-native'
import React from 'react'
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps'

const yelpRestaurantInfo = {
    name: "Farmhouse Kithcen Thai Cusine",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHN8ZW58MHx8MHx8&w=1000&q=80",
    price:"$$",
    reviews:"15000",
    ratting:"4.5",
    categories : [
        {title:"Thai"},
        {title:"Comfort Food"},
        
    ],

}





export default function About(props) {
  const {name, image, price, reviews, rating, categories}= props.route.params
  const formattedCategories = categories.map((cat)=>cat.title).join(" . ")
  const description = `${formattedCategories} ${price ? " . " + price: ""} . . ${rating} . . ${reviews}`
  return (
    <View>
      <RestaurantImage image = {image}/>
      <RestaurantTitle title = {name}/>
      <RestaurantDescription description={description}/>
    </View>
  )
}

const RestaurantImage = (props) => (
    <Image source = {{uri: props.image}} style = {{width:"100%" , height:180}}/>
);

const RestaurantTitle = (props) => (
<Text style={{
    fontSize:29,
    fontWeight:"600",
    marginTop:10,
    marginHorizontal:15,
}}>{props.title}</Text>
);

const RestaurantDescription = (props) => (
    <Text style={{
        fontSize:15.5,
        fontWeight:"400",
        marginTop:10,
        marginHorizontal:15,
    }}>{props.description}</Text>
    );


