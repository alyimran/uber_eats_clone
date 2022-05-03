import { View, SafeAreaView , ScrollView } from 'react-native'
import {React , useEffect , useState} from 'react'
import HeaderTabs from '../components/home/HeaderTabs'
import SearchBar from '../components/home/searchBar'
import Categories from '../components/home/categories'
import RestaurantItem from '../components/home/RestaurantItem'
import Footer from '../components/home/Footer'
import axios from 'axios';

const YELP_API_KEY = "GtfFIGkFoFx5rFqW9BijFRb5rO7-JmzkPb9GglcAwaqsDEH7F-zw4fKELu_j4UHj0pQZVnfseS9oJUiEDAjGn8qjwDqKkEHoskC_WbT3chq921gRLc2diNYR6uBnYnYx";

export default function Home({navigation}) {
    const [restaurantsData , setRestaurantsData] = useState([])
    const [city , setCity] = useState("san diego")
    const [activeTab, setActiveTab] = useState("Delivery")

    const config = {
        headers: {
          Authorization:
            "Bearer GtfFIGkFoFx5rFqW9BijFRb5rO7-JmzkPb9GglcAwaqsDEH7F-zw4fKELu_j4UHj0pQZVnfseS9oJUiEDAjGn8qjwDqKkEHoskC_WbT3chq921gRLc2diNYR6uBnYnYx",
        },
        params: {
          term: "restaurants",
          location: city
        },
      };

    const getRestaurantsFromYelp = () =>{
        console.log("api call")
    axios.get("https://api.yelp.com/v3/businesses/search", config)
    .then((response) => setRestaurantsData(response.data.businesses.filter(
        (business) => business.transactions.includes(activeTab.toLowerCase())
        )
        ));  
}

useEffect(()=>{
    console.log("effect")
    getRestaurantsFromYelp();
} , [city , activeTab]);

  return (
    <SafeAreaView style= {{backgroundColor:"#eee", flex:1}}>
    <View style= {{backgroundColor:"white" , padding:15 }}>
      <HeaderTabs activeTab= {activeTab} setActiveTab= {setActiveTab}/>
      <SearchBar cityHandler = {setCity} getrestFunctin = {getRestaurantsFromYelp}/>
      </View>
      <ScrollView showsVerticalScrollIndicator= {false}>
      <Categories />
      <RestaurantItem restaurantData = {restaurantsData} navigation = {navigation}/>
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  )
}