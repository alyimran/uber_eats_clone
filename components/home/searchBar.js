import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from "react-native-vector-icons/Ionicons"
import AntDesign from "react-native-vector-icons/AntDesign"

export default function SearchBar({cityHandler , getrestFunctin}) {
  return (
    <View style={{marginTop:15 , marginBottom:10, marginStart:10, flexDirection:'row' ,  zIndex: 30}}>
     <TextInput
     query = {{key:"AIzaSyCQ0xHLurP-M7VFwiUUHDNym83RjGMiWcE"}}
     pointerEvents='box-none'
     onChangeText={(text)=>{
         const city = text
         console.log(city)
         cityHandler(text)
     }}
     onSubmitEditing={(text)=>{
        const city = text
        console.log(city)
        cityHandler(text)
    }} 
     placeholder='Search'
     style = {{flex:1 , backgroundColor:"#eee" , padding:10 , borderRadius:30 , paddingLeft:40 , 
    }}
   />
      <View style={{position:"absolute", left:10 , top:10}}  pointerEvents='box-none'>
             <Ionicons name = "location-sharp" size = {24}/>
    </View>
    <TouchableOpacity   onPress={()=>{
        getrestFunctin();
    }}>
    <View style={{flexDirection:'row',zIndex: 30, right:10 ,top:5 , position:"absolute", backgroundColor:'white' ,padding:9, borderRadius:30, alignItems:'center'}}>
            <AntDesign 
            name = "clockcircle" 
            size = {11} 
            style={{marginRight:6}}/>
            <Text>Search</Text>  
         </View>
         </TouchableOpacity>
    </View>
  )
}