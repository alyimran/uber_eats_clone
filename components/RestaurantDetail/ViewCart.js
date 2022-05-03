import { View, Text, TouchableOpacity , Modal, Pressable, StyleSheet} from 'react-native'
import {React ,useState} from 'react'
import {useSelector} from 'react-redux'
import OrderItem from './OrderItem';
import { db } from '../../firebase';

export default function ViewCart({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const {restaurantName, items} = useSelector((state)=>state.cartReducer.selectedItems)
    const total = items.map((item=>Number(item.price.replace('$', '')))).reduce((pre, curr)=> pre + curr , 0);
    // const totalUSD = total.toLocalString("en" , {
    //     style: "currency",
    //     currency: "USD",
    // })

    const addOrderToFirebase = () => {
      db.collection("orders").add({
        items:items,
        restaurantName:restaurantName,
        createdAt: new Date(),

      });

      setModalVisible(false);
      navigation.navigate("OrderCompleted");
    }

    

    const checkoutModalContent = () =>{
        return (
          <View style = {styles.modalContainer}>
            <View style = {styles.modalCheckoutContainer}>
              <Text style = {styles.restaurantName}>{restaurantName}</Text>
              {items.map((item, index)=>(<OrderItem key={index} item={item}/>
              ))}
              <View style= {styles.subtotalContainer}>
                <Text style = {styles.subtotalText}>Subtotal</Text>
                <Text style = {styles.subtotalText}>{total}</Text>
              </View>
            
    <View style={{
        flexDirection:'row',
        justifyContent:'center',
    }}>
        <Pressable style={{
            marginTop:20,
            backgroundColor:'black',
            alignItems:'center',
            padding:13,
            borderRadius:30,
            width:300,
            position:'relative'
            
        }}
        onPress={()=>addOrderToFirebase()}> 
        
      <Text style={{color:'white',  fontSize:20 }}>Checkout</Text>
      <Text style={{
        position:'absolute',
        right:20,
        color:'white',
        fontSize:15, 
        top:17
        }}>{total}</Text>
      </Pressable>
    </View>
    </View>
    </View>
        
        );
    }
    
  return (
      <>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
        {checkoutModalContent()}
      </Modal>
      {total? (
      <View style = {{
         alignItems:'center',
         flex:1,
         flexDirection:'row',
         justifyContent:'center',
        position:"absolute",
        top:590,
        zIndex:999
      }}>
    <View style={{
        flexDirection:'row',
        justifyContent:'center',
        width:"100%"
    }}>
        <Pressable style={{
            marginTop:20,
            backgroundColor:'black',
            alignItems:'center',
            flexDirection:'row',
            padding:15,
            justifyContent:'flex-end',
            borderRadius:30,
            width:300,
            position:'relative'
        }}
        onPress={()=>setModalVisible(true)}> 
        
      <Text style={{color:'white',  fontSize:20 , marginRight:50}}>ViewCart</Text>
      <Text style={{color:'white',  fontSize:20 }}>{total}</Text>
      </Pressable>
    </View>
    </View>
    ):(<></>)}
    
    </>
  )
}


const styles = StyleSheet.create({
  modalContainer: {
    flex:1,
    justifyContent:"flex-end",
    backgroundColor:'rgba(0,0,0,0.7)'
  },
  modalCheckoutContainer:{
    backgroundColor:'white',
    padding:16,
    height:350,
    borderWidth:1,
  }
  ,
  restaurantName:{
    textAlign:'center',
    fontWeight:'600',
    justifyContent:'space-between',
    marginTop:15
  },
  subtotalText:{
    textAlign:'left',
    fontWeight:'600',
    fontSize:15,
    marginBottom:10,
  },
  subtotalContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:15,
  },
});