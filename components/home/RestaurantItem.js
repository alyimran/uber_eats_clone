import { View, Text , Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export default function RestaurantItem({navigation, ...props}) {
  return (
     <>
        {props.restaurantData.map((restaurant, index)=>(
            
            <TouchableOpacity key={index}
            activeOpacity={1}  
             onPress={()=>navigation.navigate("RestaurantDetail", {
                 name:restaurant.name,
                 image:restaurant.image_url,
                 print:restaurant.price,
                 reviews:restaurant.review_count,
                 rating:restaurant.rating,
                 categories:restaurant.categories
             })}
            >
             <View
             style={{marginTop:10 , padding:15, backgroundColor:'white'}}>
            <RestaurantImage image= {restaurant.image_url}/>
            <RestaurantInfo name = {restaurant.name} rating = {restaurant.rating}/>
    </View>
    </TouchableOpacity>
    ))}
    </>
   
   
  )
}
const RestaurantImage = (props) => (
    <View>
    <Image source={{uri:props.image}}
    style={{width:"100%" , height:180}}
    />
    <TouchableOpacity style={{position:'absolute' , right:20,top:20 }}>
        <MaterialCommunityIcons name = "heart-outline" 
        size={25} color="white"/>
    </TouchableOpacity>
    </View>
)

const RestaurantInfo = (props)=> (
    <View style={{flexDirection:'row', justifyContent:'space-between' , alignItems:"center" , marginTop:10,}}>
        <View>
    <Text>{props.name}</Text>
    <Text>30 to 49 </Text>
    </View>
    <View style={{marginRight:10 , backgroundColor:'#eee' , height:30, width:30, alignItems:'center' , justifyContent:'center' , borderRadius:30}}>
    <Text>{props.rating} </Text>
    </View>
    </View>
    
)