





import React from "react";
import {
  Text, View, TouchableOpacity, Image,StyleSheet,StatusBar,TextInput,ScrollView,FlatList
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'




 export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      isVisible: true,
      tirmnate: true,
      searchText: '',
     show: true,
    }
  }

  render(){
    return(
      <>
        <Text>My name is Mahmoud</Text>
      </>
    )
  }
}