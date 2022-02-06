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
    RefreshControl
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createStackNavigator } from '@react-navigation/stack';

import Details from '../Tasks/Details'
import CheckoutPersonal from'../Tasks/CheckoutPersonal'
import CheckoutIdentfication from '../Tasks/CheckoutIdentfication'
import CheckoutLicense from '../Tasks/CheckoutLicense'
import CheckoutPayment from '../Tasks/CheckoutPayment'
import Summary from '../Tasks/Summary'
import Rented from '../Tasks/Rented'
import pick_up_time from '../Tasks/pick_up_time'
//import { SwipeListView } from 'react-native-swipe-list-view';
//import DateTimePicker from '@react-native-community/datetimepicker';

//import { Fab } from "native-base";
//import { FAB } from 'react-native-paper';
 
const { width, height } = Dimensions.get('screen');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Catigories_Tab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            isVisible: true,
            tirmnate: true,
            searchText: '',
            show: true,
            showText: false,
            check: 1,
            color: '#f00',

            Categoris: [
                {
                    name: 'All',
                    show: true,
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgXBvBknJWdYkLAuk8325C4IT_xtzdcDDnkz-4RFwZgmDLw_kZjoX-AZHBn4Ns89vFQaQ&usqp=CAU',
                },
                {
                    name: 'Chevrolet',
                    show: true,
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXyzb4XjGfwCoRSM-xbokJCc5594qEi6_e55IWQV8ryVW3an1SZqxRcBaXoHfd6X5PyQ&usqp=CAU',
                },
                {
                    name: 'Nissan',
                    show: true,
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQELlXjjcU4q5e4KZIFuck7KY6qvPqq5zgR_0fGV67NvbvFNjbK7w1StjR37zP-H7Jubxw&usqp=CAU',
                },
                {
                    name: 'BMW',
                    show: true,
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYU9v77E0a-enPYPDUJ-ZNMcs6jAPakFi5YF-q7ZV0HcI-_S4snp3a-fxaP5G7yMJeUQ&usqp=CAU',
                },
                {
                    name: 'Hyundai',
                    show: true,
                    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CSgYwIpAqFTUkeKvllfs0MVsjpUjaZgjVfvu9xs4wcivUJqe0p0QIAgyzxsCU-aLOPo&usqp=CAU',
                },

            ],


            Items: [
                {
                    item_name: 'White-Chevrolet',
                    show: true,
                    color: 'lighit gray',
                    item_price: '$90/day',
                    num_stars: 5,
                    item_photo: require("../img/(4).jpeg"),
                    licence_no:'NS43-MYZ',
                    plate_no:122455565,
                    icon_color:'#888888',
                    price:'$250',
                    description:'There were some people, it seemed, who were incapable of being pleasant about anything.  ',
                },
                {
                    item_name: 'White-Chevrolet',
                    show: true,
                    color: 'lighit gray',
                    item_price: '$90/day',
                    num_stars: 5,
                    item_photo: require("../img/(12).jpeg"),
                    licence_no:'NS43-MYZ',
                    plate_no:12-34-56,
                    icon_color:'#888888',
                    price:'$250',
                    description:'There were some people, it seemed, who were incapable of being pleasant about anything. Of course, the cars that such people drove tended to be difficult as well. Nice cars have nice drivers; bad cars have bad drivers. A persons gearbox revealed everything that you could want to know about that person.',
                },
                {
                    item_name: 'White-Chevrolet',
                    show: true,
                    color: 'Red',
                    item_price: '$90/day',
                    num_stars: 5,
                    item_photo: require("../img/(13).jpeg"),
                    licence_no:'NS43-MYZ',
                    plate_no:12-34-56,
                    icon_color:'#888888',
                    price:'$250',
                    description:'There were some people, it seemed, who were incapable of being pleasant about anything. Of course, the cars that such people drove tended to be difficult as well. Nice cars have nice drivers; bad cars have bad drivers. A persons gearbox revealed everything that you could want to know about that person.',
                },
                {
                    item_name: 'White-Chevrolet',
                    show: true,
                    color: 'Red',
                    item_price: '$90/day',
                    num_stars: 5,
                    item_photo: require("../img/(14).jpeg"),
                    licence_no:'NS43-MYZ',
                    plate_no:12-34-56,
                    icon_color:'#888888',
                    price:'$250',
                    description:'There were some people, it seemed, who were incapable of being pleasant about anything. Of course, the cars that such people drove tended to be difficult as well. Nice cars have nice drivers; bad cars have bad drivers. A persons gearbox revealed everything that you could want to know about that person.',
                },
                {
                    item_name: 'White-Chevrolet',
                    show: true,
                    color: 'White',
                    item_price: '$90/day',
                    num_stars: 5,
                    item_photo: require("../img/(18).jpeg"),
                    licence_no:'NS43-MYZ',
                    plate_no:12-34-56,
                    icon_color:'#888888',
                    price:'$250',
                    description:'There were some people, it seemed, who were incapable of being pleasant about anything. Of course, the cars that such people drove tended to be difficult as well. Nice cars have nice drivers; bad cars have bad drivers. A persons gearbox revealed everything that you could want to know about that person.',
                },
                {
                    item_name: 'White-Chevrolet',
                    show: true,
                    color: '#000',
                    item_price: '$90/day',
                    num_stars: 5,
                    item_photo: require("../img/(19).jpeg"),
                    licence_no:'NS43-MYZ',
                    plate_no:12-34-56,
                    icon_color:'#888888',
                    price:'$250',
                    description:'There were some people, it seemed, who were incapable of being pleasant about anything. Of course, the cars that such people drove tended to be difficult as well. Nice cars have nice drivers; bad cars have bad drivers. A persons gearbox revealed everything that you could want to know about that person.',
                },

            ]
        }
    }

    change_color(index) {
        let data = this.state.Items
        if (data[index].icon_color == '#888888') {
            data[index].icon_color ='#00f'
        } else {
            data[index].icon_color = '#888888'
        }
        this.setState({ Items: data })
    }


    search(searchText) {
        let list = this.state.Items;
        let check = this.state.check = 0;
        let data = []
        for (let i = 0; i < list.length; i++) {
            if ((list[i].item_name.toUpperCase()).includes((searchText.trim()).toUpperCase())) {
                list[i].show = true;
                // return list[i]
                check++;
            } else {
                list[i].show = false;
                this.state.check = 0
            }
        }

        this.setState({ Items: list, check: check });
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
                    <View style={styles.header}>
                        <Text style={{ fontSize: 26, fontWeight: 'bold', marginTop: 50, color: "#F8F8F8", }}>Categories</Text>
                    </View>




                    <View style={{ flexDirection: "row", marginTop: 30, justifyContent: "space-between" }}>
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
                            marginRight: 15,
                            height: 50,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.4,
                            shadowRadius: 3.84,

                            elevation: 6,
                            paddingHorizontal: 20
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
                                    this. search(value)
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



                    <View style={{ width: "100%", height: 145, paddinHorizontal: 10, marginVertical: 20, }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {
                                this.state.Categoris.map((data, index) =>

                                    <View style={styles.categoris_map}>
                                        <TouchableOpacity 
                                        >
                                            <Text style={{
                                                fontSize: 20,
                                                textAlign: 'center'
                                            }}>{data.name}</Text>

                                            <Image source={{ uri: data.photo }}
                                                style={{
                                                    width: windowWidth * .3, height: 90,
                                                    resizeMode: 'contain',borderRadius:25,
                                                }}
                                            />

                                        </TouchableOpacity>
                                    </View>
                                )
                            }

                        </ScrollView>
                    </View>





                    <ScrollView>
                        <View style={styles.container_items}>
                            {this.state.check != 0 ? (
                                <>
                                    {
                                        this.state.Items.map((item, index) =>
                                            item.show == true ? (
                                                <TouchableOpacity 
                                                 onPress={()=>{
                                                     this.props.navigation.navigate("Details",{
                                                       
                                                        carDetails:item ,
                                                        index:index,
                                                        car_img:item.item_photo,
                                                        car_name:item.item_name,
                                                        car_price:item.price,
                                                        num_stars:item.num_stars
                                                     })
                                                    
                                                 }}  
                                                activeOpacity={1} style={styles.item_map}>
                                                    <Image source={item.item_photo}
                                                        style={{ width: 120, height: 95, resizeMode: 'contain', alignSelf: "center" }}
                                                    />
                                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 5, }}>
                                                        <TouchableOpacity
                                                          onPress={()=>{
                                                              this.change_color(index)
                                                          }}
                                                        >
                                                        <MaterialCommunityIcons name="bookmark-outline" size={23} style={{ color:item.icon_color, marginLeft: 2 }} /> 
                                                        </TouchableOpacity>
                                                        <Text style={{ fontSize: 15, color: "#888888" }}>{item.item_name}</Text>
                                                    </View>
                                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginBottom: 5 }}>
                                                        <View style={{ flexDirection: "row", marginTop: 2 }}>
                                                            <Text style={{ fontSize: 15, color: "#888888", }}>{item.num_stars}</Text>
                                                            <Icon name="star" size={18} style={{ color: "#FFD100" }} />
                                                        </View>

                                                        <Text style={{ fontSize: 17, color: "#000", fontWeight: "bold" }}>{item.item_price}</Text>
                                                    </View>
                                                </TouchableOpacity>
                                            ) : (
                                                null
                                            )

                                        )
                                    }
                                    <View style={{ width: 50, height: 80 }}></View>
                                </>

                            ) : (
                                <View style={{ width: windowWidth, height: windowHeight * .2, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ fontSize: 22, fontWeight: 'bold',color:'#fff' }}>There is no items</Text>
                                </View>
                            )

                            }

                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#272425"
    },
    header: {
        // width: '100%',
        // height: '14%',
        // backgroundColor: '#ddd',
        justifyContent: 'flex-end',
        // alignItems: 'center',
        marginHorizontal: 15,

        // flexDirection: 'row',
    },
    filter: {
        width: 50,
        height: windowHeight * .07,
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 15,
    },
    search: {
        width: windowWidth * .73,
        height: windowHeight * .07,
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 18,
        justifyContent: 'flex-end',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 15,
        paddingTop: 5,
    },
    container_categoris: {
        width: '100%',
        height: '20%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    categoris_map: {
        width: windowWidth * .35,
        height: height * .15, //
        backgroundColor: '#fff',
        // marginVertical: 15,
        marginHorizontal: 10,
        alignSelf: "flex-end",
        // alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,
        elevation: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        paddingTop: 3,
    },
    container_items: {
        width: width,
        height: height * .65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        paddingHorizontal: 15,

    },
    item_map: {
        width: "48%",
        height: 150,
        backgroundColor: '#fff',
        marginTop: 25,
        paddingRight: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.84,

        elevation: 5,
        borderRadius: 22,


    },

    tap_view: {
        width: '100%',
        height: windowHeight * .08,
        backgroundColor: '#fff',   //#F3F0F7
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 13,
        paddingRight: 13,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
})




const Stack = createStackNavigator();
export default function () {
    
    return (
     
    <Stack.Navigator 
    screenOptions={{
        headerShown: false
      }} 
    >
      <Stack.Screen
        name="Catigories_Tab"
        component={Catigories_Tab}
       
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