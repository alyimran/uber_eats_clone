import { View, Text, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import LottieView from 'lottie-react-native'

export default function OrderCompleted() {
    const [modalVisible, setModalVisible] = useState(false);
    const {restaurantName, items} = useSelector((state)=>state.cartReducer.selectedItems)
    const total = items.map((item=>Number(item.price.replace('$', '')))).reduce((pre, curr)=> pre + curr , 0);
  return (
    <SafeAreaView style = {{flex:1, backgroundColor:'white'}}>
        <LottieView style = {{height:100, alignSelf:'center' , marginBottom:30, marginTop:20}}
        source= {require("../assets/animations/check-mark.json")}
        autoPlay
        speed={0.5}
        loop={false}/>
      <Text>Your order at the the {restaurantName}  for {total}</Text>
      {/* {<menuItems foods = {lastOrder}} */}
      <LottieView style = {{height:200, alignSelf:'center' , marginBottom:30, marginTop:20}}
        source= {require("../assets/animations/cooking.json")}
        autoPlay
        speed={0.5}
        loop={false}/>
    </SafeAreaView>
  )
}