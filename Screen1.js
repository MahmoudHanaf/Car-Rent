


import React from "react";
import {
  Text, View, TouchableOpacity, Image, StyleSheet, StatusBar, TextInput, ScrollView, FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
//import { createDrawerNavigator } from 'react-navigation-drawer';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//import { createBottomTabNavigator } from 'react-navigation-tabs';
//createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);

//import Screen2 from '../Tasks/Screen2'

//import { Item } from "react-native-paper/lib/typescript/components/List/List";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      isVisible: true,
      tirmnate: true,
      searchText: '',
      show: true,
      showText: false,
      check: 1,
      color:'#f00',

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
          color:'#000',
          item_price: '$90/day',
          num_stars: 5,
          item_photo: 'https://lh3.googleusercontent.com/C61yPadzvluAB6JcnBsOiGZLb95dQfPZBe1r2Oaim0vftACQB5GeCVe7BgdDeJ3ftJ0JUQ=s133'
        },
        {
          item_name: 'White-Chevrolet',
          show: true,
          color:'#000',
          item_price: '$90/day',
          num_stars: 5,
          item_photo: 'https://lh3.googleusercontent.com/C61yPadzvluAB6JcnBsOiGZLb95dQfPZBe1r2Oaim0vftACQB5GeCVe7BgdDeJ3ftJ0JUQ=s133'
        },
        {
          item_name: 'White-Chevrolet',
          show: true,
          color:'#000',
          item_price: '$90/day',
          num_stars: 5,
          item_photo: 'https://lh3.googleusercontent.com/C61yPadzvluAB6JcnBsOiGZLb95dQfPZBe1r2Oaim0vftACQB5GeCVe7BgdDeJ3ftJ0JUQ=s133'
        },
        {
          item_name: 'White-Chevrolet',
          show: true,
          color:'#000',
          item_price: '$90/day',
          num_stars: 5,
          item_photo: 'https://lh3.googleusercontent.com/C61yPadzvluAB6JcnBsOiGZLb95dQfPZBe1r2Oaim0vftACQB5GeCVe7BgdDeJ3ftJ0JUQ=s133'
        },
        {
          item_name: 'White-Chevrolet',
          show: true,
          color:'#000',
          item_price: '$90/day',
          num_stars: 5,
          item_photo: 'https://lh3.googleusercontent.com/C61yPadzvluAB6JcnBsOiGZLb95dQfPZBe1r2Oaim0vftACQB5GeCVe7BgdDeJ3ftJ0JUQ=s133'
        },
        {
          item_name: 'White-Chevrolet',
          show: true,
          color:'#000',
          item_price: '$90/day',
          num_stars: 5,
          item_photo: 'https://lh3.googleusercontent.com/C61yPadzvluAB6JcnBsOiGZLb95dQfPZBe1r2Oaim0vftACQB5GeCVe7BgdDeJ3ftJ0JUQ=s133'
        },

      ]
    }
  }

  change_color(index){
    let data=this.state.Items
    if(data[index].color =='#000'){
      data[index].color=='#f00'
    }else{
      data[index].color=='#000'
    }

    this.setState({Items:data})
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
          backgroundColor="#F3F0F7"  //#FF6C00
          barStyle="dark-content"
        />

        <View style={styles.header}>
          <Text style={{ fontSize: 26, fontWeight: 'bold', }}>Categories</Text>
        </View>

    
        <View style={{  
          width: '100%',
          height: windowHeight * .08,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
        }}> 

          <View style={styles.filter}>
            <TouchableOpacity

            >
              <Icon name="sliders-h" size={22} style={{ color: '#00f' }} />
            </TouchableOpacity >
          </View>

          <View style={styles.search}>
            <TextInput
              onChangeText={(value) => {
                this.setState({ searchText: value })
                this.search(value)
              }}
              placeholder="Search"
              style={{ fontSize: 18, marginLeft: 5 }}
            />
            <Icon name="search" size={21} style={{}} />
          </View>
        </View> 



        <View style={styles.container_categoris}>
          <ScrollView horizontal={true}>
            {
              this.state.Categoris.map((data, index) =>

                <View style={styles.categoris_map}>
                  <TouchableOpacity activeOpacity={.4}
                   >
                    <Text style={{
                      fontSize: 20, fontWeight: 'bold',
                      textAlign: 'center'
                    }}>{data.name}</Text>

                    <Image source={{ uri: data.photo }}
                      style={{
                        width: windowWidth * .3, height: 90,
                        borderRadius: 20, resizeMode: 'contain'
                      }}
                    />

                  </TouchableOpacity>
                </View>
              )
            }
            <View style={{ width: 50, height: 50 }}></View>
          </ScrollView>
        </View>



        <ScrollView>
          <View style={styles.container_items}>
            {this.state.check != 0 ? (
              <>
                {
                  this.state.Items.map((item, index) =>
                    item.show == true ? (
                      <View style={styles.item_map}>
                        <Image source={{ uri: item.item_photo }}
                          style={{ width: 120, height: 110, resizeMode: 'contain' }}
                        />
                        <View style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          width: '100%',
                        }}>

                          <View style={{ flexDirection: 'column', justifyContent: 'center', }}>
                            <TouchableOpacity
                             onPress={()=>{
                               this.change_color(index)
                             }}>
                            <Icon name="bookmark" size={20} style={{ alignSelf: 'center',color:item.color }} />
                            </TouchableOpacity>
                            <Text style={{ marginTop: 10, marginLeft: 10 }}>{item.num_stars}
                             <Icon name="star" size={20} style={{ color: '#00f', }}
                            /></Text>

                          </View>

                          <View style={{ flexDirection: 'column', }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.item_name}</Text>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 10 }}>{item.item_price}</Text>
                          </View>

                        </View>
                      </View>
                    ) : (
                      null
                    )

                  )
                }
                <View style={{ width: 50, height: 80 }}></View>
              </>

            ) : (
              <View style={{ width: windowWidth, height: windowHeight * .4, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ fontSize: 22, fontWeight: 'bold', }}>There is no items</Text>
              </View>
            )

            }

          </View>
        </ScrollView>


        <View style={styles.tap_view}>
          <Icon name="user-alt" size={25} style={{ color: '#8E8EA0' }} />

          <TouchableOpacity
            onPress={() => {
            }}
          >
            <Icon name="car" size={30} style={{ color: '#8E8EA0' }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Icon name="bookmark" size={28} style={{ color: '#8E8EA0' }} />
          </TouchableOpacity>

          <Icon name="clone" size={25} style={{ color: '#8E8EA0' }} />

          <Icon name="home" size={28} style={{ color: '#8E8EA0' }} />

        </View>


      </>
    )
  }
}

export default createAppContainer(
  createStackNavigator(
    {
      Page1: App,
      // Page2: Screen2,

    },
    {
      headerMode: 'none'
    },
    {
      initialRouteName: 'page1'
    }
  ),


)


const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '9%',   
    // backgroundColor: '#fff',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
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
    height: '23%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  categoris_map: {
    width: windowWidth * .35,
    height: 120, //
    backgroundColor: '#fff',
    marginBottom: 3,    
    marginLeft: 20,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 22,
    paddingTop: 3,
  },
  container_items: {
    width: '100%',
    height: windowHeight * .85,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: 8,
    paddingRight: 8,
  },
  item_map: {
    width: 165,
    height: 190,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingRight: 5,
    borderRadius: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 22,
    paddingTop: 5,

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

