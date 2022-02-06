import * as React from 'react'
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableHighlight,
  ActivityIndicator,
  DrawerLayoutAndroid,
  Dimensions,
  RefreshControl,
  KeyboardAvoidingView,
  FlatList,
  VirtualizedList
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import { SwipeListView } from 'react-native-swipe-list-view';
//import DateTimePicker from '@react-native-community/datetimepicker';




//import Icon2 from 'react-native-vector-icons/Entypo';

//import Home_carental from './Tasks/Cars_Home'
import Catigories_Tab from '../Tasks/Catigories_Car'

import saved_Tab from '../Tasks/Saved_carental'
import rent_car from '../Tasks/car_rent'
import car_profile from '../Tasks/Profile_car'

//import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Map from '../Tasks/Map'
//import { Fab, Item } from "native-base";
//import { FAB } from 'react-native-paper';


import Details from '../Tasks/Details'
import CheckoutPersonal from'../Tasks/CheckoutPersonal'
import CheckoutIdentfication from '../Tasks/CheckoutIdentfication'
import CheckoutLicense from '../Tasks/CheckoutLicense'
import CheckoutPayment from '../Tasks/CheckoutPayment'
import Summary from '../Tasks/Summary'
import Rented from '../Tasks/Rented'
import pick_up_time from '../Tasks/pick_up_time'


const { width, height } = Dimensions.get('screen');



class Home_carental extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Search_Text: "",
      color: "#ccc",

      Cars: [
        {
          item_name: 'Red BMW i8',
          show: true,
          color: 'Red',
          item_price: '$90/day',
          num_stars: 4.5,
          item_photo: require("../img/m4.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$105/day',
          distance: "58 miles away",
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'near by car',
        },
        {
          item_name: 'Yellow ferrari F8',
          distance: "58 miles away",
          show: true,
          color: 'Yellow',
          item_price: '$90/day',
          num_stars: 4.6,
          item_photo: require("../img/m12.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$140/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'near by car',
        },
        {
          item_name: 'Nisssan MaxiMa',
          distance: "60 miles away",
          show: true,
          color: 'Yellow',
          item_price: '$90/day',
          num_stars: 4.8,
          item_photo: require("../img/m14.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$120/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'near by car',
        },
        {
          item_name: 'Nisssan ',
          distance: "30 miles away",
          show: true,
          color: 'black',
          item_price: '$90/day',
          num_stars: 4.9,
          item_photo: require("../img/m18.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$110/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'near by car',
        },
        {
          item_name: 'Nisssan ',
          distance: "30 miles away",
          show: true,
          color: 'black',
          item_price: '$90/day',
          num_stars: 4.9,
          item_photo: require("../img/m14.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$110/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'near by car',
        },
        {
          item_name: 'Red BMW  ',
          distance: "40 miles away",
          show: true,
          color: 'black',
          item_price: '$90/day',
          num_stars: 4.9,
          item_photo: require("../img/m4.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$110/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'top rated car',
        },
        {
          item_name: 'Yellow ferrari ',
          distance: "58 miles away",
          show: true,
          color: 'Yellow',
          item_price: '$90/day',
          num_stars: 4.6,
          item_photo: require("../img/m12.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$120/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'top rated car',
        },
        {
          item_name: 'Nisssan MaxiMa',
          distance: "60 miles away",
          show: true,
          color: 'Yellow',
          item_price: '$90/day',
          num_stars: 4.8,
          item_photo: require("../img/m14.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$120/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'top rated car',
        },
        {
          item_name: 'Nisssan ',
          distance: "30 miles away",
          show: true,
          color: 'black',
          item_price: '$90/day',
          num_stars: 4.9,
          item_photo: require("../img/m18.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$110/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'top rated car',
        },
        {
          item_name: 'Nisssan ',
          distance: "30 miles away",
          show: true,
          color: 'black',
          item_price: '$90/day',
          num_stars: 4.9,
          item_photo: require("../img/m14.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$110/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'top rated car',
        },
        {
          item_name: 'Red BMW i8 ',
          distance: "30 miles away",
          show: true,
          color: 'black',
          item_price: '$90/day',
          num_stars: 4.9,
          item_photo: require("../img/m4.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$110/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'hot offers car',
        },
        {
          item_name: 'Yellow ferrari F8',
          distance: "58 miles away",
          show: true,
          color: 'Yellow',
          item_price: '$90/day',
          num_stars: 4.6,
          item_photo: require("../img/m12.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$150/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'hot offers car',
        },
        {
          item_name: 'Nisssan MaxiMa',
          distance: "60 miles away",
          show: true,
          color: 'Yellow',
          item_price: '$90/day',
          num_stars: 4.8,
          item_photo: require("../img/m14.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$120/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'hot offers car',
        },
        {
          item_name: 'Nisssan ',
          distance: "30 miles away",
          show: true,
          color: 'black',
          item_price: '$90/day',
          num_stars: 4.9,
          item_photo: require("../img/m18.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$110/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'hot offers car',
        },
        {
          item_name: 'Nisssan ',
          distance: "30 miles away",
          show: true,
          color: 'black',
          item_price: '$90/day',
          num_stars: 4.9,
          item_photo: require("../img/m12.png"),
          licence_no: 'NS43-MYZ',
          plate_no: 122455565,
          icon_color: '#888888',
          price: '$110/day',
          description: 'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
          category: 'hot offers car',
        },
      ],
        Save:[],
    }
  }

  change_color(index) {
    let data = this.state.Cars
    if (data[index].icon_color == '#888888') {
        data[index].icon_color ='#00f'
    } else {
        data[index].icon_color = '#888888'
    }
    this.setState({ Cars: data })
}





  render() {
    return (
      <>
        <StatusBar
          backgroundColor="#272425"
          barStyle="light-content"
          translucent={true}

        />

        <View style={styles.container}>
          <View style={{ height: height * .3, backgroundColor: '#272425', }}>
            <TouchableOpacity>
              <View style={{
                height: height * .09,
                backgroundColor: '#272425',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end'
              }}>
                <Text style={styles.Location}>Cairo, 5th settlement</Text>
                <Icon name="location-outline" style={styles.location_icon} />
              </View>
            </TouchableOpacity>

            <View style={{
              alignSelf: "flex-end",
              width: "70%",
              marginTop: 10
            }}>
              <Text style={styles.Title_Home}>Find Your Prefect Property!!</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 15, justifyContent: "space-between" }}>
              <TouchableOpacity style={{
                width: "15%",
                height: 50,
                backgroundColor: "#FFD100",
                marginLeft: 20,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                justifyContent: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.4,
                shadowRadius: 3.84,

                elevation: 6,
              }}>
                <Icon1 name="sliders-h" style={{ fontSize: 20, textAlign: "center", color: "#fff" }} />
              </TouchableOpacity>
              <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#B0B0B0",
                width: "70%",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10,
                marginRight: 20,
                height: 50,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.4,
                shadowRadius: 3.84,

                elevation: 6,
                paddingHorizontal: 15
              }}>

                <TextInput style={{
                  width: "80%",
                  height: 48,
                  backgroundColor: "#B0B0B0",
                  fontSize: 18,
                  textAlign: "left",
                  marginLeft: 15,
                  color: "#000"

                }}
                  value={this.state.Search_Text}
                  onChangeText={(value) => {
                    this.setState({ Search_Text: value })
                  }}
                  placeholder="Search"
                  placeholderTextColor="#F0F0F0"
                  multiline={true}

                />
                <Icon1 name="search" style={{
                  fontSize: 20,
                  textAlign: "center",
                  color: "#F0F0F0",
                }} />
              </View>

            </View>
          </View>

          <ScrollView style={{ flex: .54, marginBottom: 0, }}>

            <View>
              <Text style={{
                fontSize: 20,
                marginRight: 20,
                marginTop:5,
                color: "#FFFFFF"
              }}>Near by _____</Text>
            </View>

            {/* <View style={{ flexDirection: "row", flexWrap: "nowrap", width: "100%", justifyContent: "space-between" }}>*/}
            <ScrollView horizontal style={{ width: "100%", height: height * .22, marginHorizontal: 10,}} showsHorizontalScrollIndicator={false} >
              {
                this.state.Cars.map((car_item, index) => {
                  return (
                    <>
                    {
                      car_item.category =='near by car' ?(
                        <TouchableOpacity activeOpacity={.4}
                        onPress={()=>{
                          this.props.navigation.navigate("Details",{
                             carDetails:car_item ,
                             index:index,
                             car_img:car_item.item_photo,
                             car_name:car_item.item_name,
                             car_price:car_item.price,
                             num_stars:car_item.num_stars
                          })
                      }}  
                      key={car_item.id}
                      style={{
                        width: width * .46,
                        height: height * .18,
                        backgroundColor: "#fff",
                        marginHorizontal: 5,
                        marginVertical: 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                       
                      }}>
                      <View style={{ alignSelf: "center", marginTop: 1, }}></View>
                      <Image source={car_item.item_photo} style={{
                        width: width * .39,
                        height: height * .10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        alignSelf: "center",
                        resizeMode: "contain"
                      }} />

                      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, }}>
                        <TouchableOpacity
                           onPress={()=>{
                            this.change_color(index)
                           }}
                        >
                        <MaterialCommunityIcons name="bookmark-outline" size={23} style={{ color: car_item.icon_color, marginLeft: 2 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, color: "#888888" }}>{car_item.item_name}</Text>
                      </View>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginBottom: 5 }}>
                        <View style={{ flexDirection: "row", marginTop: 2 }}>
                          <Text style={{ fontSize: 15, color: "#888888", }}>{car_item.num_stars}</Text>
                          <Icon name="star" size={18} style={{ color: "#FFD100" }} />
                        </View>

                        <Text style={{ fontSize: 17, color: "#000", fontWeight: "bold" }}>{car_item.price}</Text>
                      </View>

                    </TouchableOpacity>
                      ):(
                        null
                      )
                    }
                   </>
                   

                  )
                })
              }
            </ScrollView>
            {/* </View> */}


            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity style={{ flexDirection: "row", marginTop: 22, marginLeft: 15 }}>
                <Icon name="ios-chevron-forward" style={{
                  fontSize: 20,
                  color: "#B0B0B0",
                }} />
                <Text style={{ fontSize: 17, color: "#B0B0B0" }}>ViewAll</Text>
              </TouchableOpacity>
              <Text style={{
                fontSize: 20,
                marginTop: 20,
                marginBottom: 10,
                marginRight: 20,
                color: "#FFFFFF"
              }}>Top Rated _____</Text>
            </View>

            {/* <View style={{ flexDirection: "row", flexWrap: "nowrap", width: "100%", justifyContent: "space-between" }}>*/}
            <ScrollView
              horizontal={true}
              // pagingEnabled={true}
              // directionalLockEnabled={true}
              style={{ width: "100%", height: 155, marginHorizontal: 10 }}
              showsHorizontalScrollIndicator={false} >
              {
                this.state.Cars.map((car_item, index) => {
                  return (
                    <>
                    {
                      car_item.category =='top rated car' ?(
                    <TouchableOpacity activeOpacity={.4}
                    onPress={()=>{
                      this.props.navigation.navigate("Details",{
                         carDetails:car_item ,
                         index:index,
                         car_img:car_item.item_photo,
                         car_name:car_item.item_name,
                         car_price:car_item.price,
                         num_stars:car_item.num_stars
                      })
                  }}  
                      key={car_item.id}
                      style={{
                        width: width * .46,
                        height: height * .18,
                        backgroundColor: "#fff",
                        marginHorizontal: 5,
                        marginVertical: 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                       
                      }}>
                      <View style={{ alignSelf: "center", marginTop: 1, }}></View>
                      <Image source={car_item.item_photo} style={{
                        width: width * .39,
                        height: height * .10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        alignSelf: "center",
                        resizeMode: "contain"
                      }} />

                      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, }}>
                        <TouchableOpacity
                         onPress={()=>{
                           this.change_color(index)
                         }}
                        >
                        <MaterialCommunityIcons name="bookmark-outline" size={23} style={{ color:car_item.icon_color, marginLeft: 2 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, color: "#888888" }}>{car_item.item_name}</Text>
                      </View>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginBottom: 5 }}>
                        <View style={{ flexDirection: "row", marginTop: 2 }}>
                          <Text style={{ fontSize: 15, color: "#888888", }}>{car_item.num_stars}</Text>
                          <Icon name="star" size={18} style={{ color: "#FFD100" }} />
                        </View>

                        <Text style={{ fontSize: 17, color: "#000", fontWeight: "bold" }}>{car_item.price}</Text>
                      </View>

                    </TouchableOpacity>
                      ):(
                        null
                      )
                }
                </>
                  )
                })
              }
            </ScrollView>
            {/* </View> */}

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <TouchableOpacity style={{ flexDirection: "row", marginTop: 30, marginLeft: 15 }}>
                <Icon name="ios-chevron-forward" style={{
                  fontSize: 20,
                  color: "#B0B0B0",
                }} />
                <Text style={{ fontSize: 17, color: "#B0B0B0" }}>ViewAll</Text>
              </TouchableOpacity>
              <Text style={{
                fontSize: 20,
                marginTop: 26,
                marginBottom: 10,
                marginRight: 20,
                color: "#FFFFFF"
              }}>Hot offers _____</Text>
            </View>

            {/* <View style={{ flexDirection: "row", flexWrap: "nowrap", width: "100%", justifyContent: "space-between" }}>*/}
            <ScrollView horizontal={true} style={{ width: "100%", height: 155, marginHorizontal: 10 }} showsHorizontalScrollIndicator={false} >
              {
                this.state.Cars.map((car_item, index) => {
                  return (
                    <>
                    {
                      car_item.category =='hot offers car' ?(
                    <TouchableOpacity  activeOpacity={.4}
                    onPress={()=>{
                      this.props.navigation.navigate("Details",{
                         carDetails:car_item ,
                         index:index,
                         car_img:car_item.item_photo,
                         car_name:car_item.item_name,
                         car_price:car_item.price,
                         num_stars:car_item.num_stars
                      })
                  }}  
                      key={car_item.id}
                      style={{
                        width: width * .46,
                        height: height * .18,
                        backgroundColor: "#fff",
                        marginHorizontal: 5,
                        marginVertical: 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                       
                      }}>
                      <View style={{ alignSelf: "center", marginTop: 2 }}></View>
                      <Image source={car_item.item_photo} style={{
                        width: 150,
                        height: 85,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        alignSelf: "center"
                      }} />

                      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, }}>
                        <TouchableOpacity
                          onPress={()=>{
                          this.change_color(index)
                          }}
                        >
                        <MaterialCommunityIcons name="bookmark-outline" size={23} style={{ color:car_item.icon_color, marginLeft: 2 }} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 15, color: "#888888" }}>{car_item.item_name}</Text>
                      </View>
                      <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 15, marginBottom: 5 }}>
                        <View style={{ flexDirection: "row", marginTop: 2 }}>
                          <Text style={{ fontSize: 15, color: "#888888", }}>{car_item.num_stars}</Text>
                          <Icon name="star" size={18} style={{ color: "#FFD100" }} />
                        </View>

                        <Text style={{ fontSize: 17, color: "#000", fontWeight: "bold" }}>{car_item.price}</Text>
                      </View>

                    </TouchableOpacity>
                      ):(
                        null
                      )
                }
                </>
                  )
                })
              }
            </ScrollView>
            {/* </View> */}








          </ScrollView>


        </View>

      </>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272425",
    //marginTop: 30
  },
  Location: {
    fontSize: 18,
    color: "#fff",
    marginLeft: 20
  },
  location_icon: {
    fontSize: 25,
    color: "#F8F8F8",
    marginRight: 15
  },
  Title_Home: {
    fontSize: 25,
    color: "#FFFFFF",
    marginRight: 20,
    fontWeight: "bold"
  },
  Home: {
    flexDirection: "column"
  },
  Category: {
    flexDirection: "column",
    marginTop: 2.5
  },
  saved: {
    flexDirection: "column",
    marginBottom: 2
  },
  My_rent: {
    flexDirection: "column",
    marginBottom: 5
  },
  profile: {
    flexDirection: "column",
    marginBottom: 5
  },
  style_indicator: {
    backgroundColor: "#000"
  },
  style_animation_header: {
    height: 70,
    backgroundColor: "#27ae60",
    justifyContent: "space-between",
    flexDirection: "row",


    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30

  },

  style_animation_search: {
    flexDirection: "row",
    height: 70,
    backgroundColor: "#27ae60",
    justifyContent: "center",
    alignItems: "center",
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30

  },
  icon_search: {
    fontSize: 20,
    marginLeft: 15,
    color: "#fff",
    marginTop: 30
  },
  style_name_craft: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 25,
  },
  arrow_style: {
    fontSize: 20,
    marginRight: 15,
    color: "#fff",
    marginTop: 30
  },
  times_style: {
    fontSize: 20,
    color: "#fff",
    marginRight: 10
  },
  view_style_textinput: {
    width: "80%",
    height: 44,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.40,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textinput_style: {
    width: "60%",
    backgroundColor: "#fff",
    height: 44,
    fontSize: 20,
    marginLeft: 15,
    color: "#000"
  },
  textiput_icon_search: {
    fontSize: 20,
    color: "#ddd",
    marginTop: 10,
    marginRight: 15
  },
  Empty_style: {
    width: 80,
    height: 80,
    resizeMode: "cover"
  },
  activityIndicator_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Empty_view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  Container: {
    backgroundColor: "#27ae60",
    flex: 1,
    overflow: "hidden"
  },
  InnerContainet_style: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: "100%",
    // marginTop:10
  },
  catigory_view_style: {
    width: width * 0.40,
    height: width * 0.5,
    backgroundColor: "#fff",
    marginVertical: 15,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image_catigory_style: {
    width: "60%",
    height: 100,
    marginTop: 28,
    borderRadius: 17.5,
    alignSelf: "center",
    resizeMode: "contain"
  },
  catigory_name_style: {
    fontSize: 25,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: "center"
  },
  Empty_view_search: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#fff"
  },
  image_Empty_search: {
    width: width * 0.7,
    height: width * 0.6,
    resizeMode: "cover"
  },
  text_Empty_search: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  }
})




//export default Home_carental;

const Stack = createStackNavigator();
export default function () {
    
    return (
     
    <Stack.Navigator 
    screenOptions={{
        headerShown: false
      }} 
    >
      <Stack.Screen
        name="Home_carental"
        component={Home_carental}
       
      />
      <Stack.Screen
        name="Details"
        component={Details}
      />

<Stack.Screen
        name="pick_up_time"
        component={pick_up_time}
      />


       <Stack.Screen
        name="CheckoutPersonal"
        component={CheckoutPersonal}
      />

<Stack.Screen
        name="CheckoutIdentfication"
        component={CheckoutIdentfication}
      />

<Stack.Screen
        name="CheckoutLicense"
        component={CheckoutLicense}
      />

<Stack.Screen
        name="CheckoutPayment"
        component={CheckoutPayment}
      />

<Stack.Screen
        name="Summary"
        component={Summary}
      />

<Stack.Screen
        name="Rented"
        component={Rented}
      />


       </Stack.Navigator>
      
    );
  }








