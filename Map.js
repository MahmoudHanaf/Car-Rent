

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



//import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//import { Fab, Item } from "native-base";
//import { FAB } from 'react-native-paper';

const { width, height } = Dimensions.get('screen');



export default class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Search_Text: "",
        }
    }
    render(){
        return(
            <>
            <View style={{flex:1,backgroundColor:'#ddd'}}>
            <Text>My name is mahmoud hanafy</Text>
            </View>
            </>
        )
    }
}