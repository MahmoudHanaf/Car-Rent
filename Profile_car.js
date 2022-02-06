import * as React from 'react'
import {
    Text, StyleSheet, View, ScrollView, Switch, TextInput, Dimensions,
    StatusBar, Image, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
const { width, height } = Dimensions.get('window');
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, text, border_color, border_color2 } from '../Tasks/Colors'
import ChangeName from '../Tasks/ChangeName'
import ChangePassword from '../Tasks/ChangePassword'
import ChangeEmail from  '../Tasks/ChangeEmail'
import History from '../Tasks/History'
class MyAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "ahmed mohamed",
            emailAddress: "ahmedmohamed@gmail.com"
        }
    }


    render() {
        return (
            <>
                <View style={{ flex: 1, backgroundColor: '#272425' }}>
                    <StatusBar
                        backgroundColor={backgroundColor}
                    />
                    <ScrollView>
                        {/* header */}
                        <View style={{
                            height: height * 0.1,
                            justifyContent: 'space-between',
                            alignItems:'flex-end',
                            flexDirection:'row',
                            padding:8,
                            paddingLeft:10,
                        }} >
                            <View style={{width:20,height:50,}}>

                            </View>
                            <Text
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: header_text,textAlign:'center',
                                }}
                            >My Account</Text>
                             <TouchableOpacity
                             onPress={()=>{
                                 this.props.navigation.goBack()
                             }}
                                style={{   }}
                            >
                                <Icon name={'chevron-left'} size={22} color={header_text}
                                    style={{  }} />
                            </TouchableOpacity>
                        </View>
                        {/* content */}
                        <View style={{ alignSelf: 'center' }} >
                            <Icon name="user-circle" size={70} style={{ color: header_text, alignSelf: 'center' }} />
                            <View style={{ marginTop: 5 }}>
                                <Text style={styles.title}>Name</Text>
                                <View style={{
                                    width: width - 15,
                                    height: height * 0.065, backgroundColor: header_text, borderRadius: 15
                                    , borderWidth: 1, borderColor: border_color, flexDirection: 'row',
                                    justifyContent: 'space-between', alignItems: 'center'
                                }}>
                                    <Text style={styles.text} >{this.state.userName}</Text>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("ChangeName", { userName: this.state.userName }) }
                                    }>
                                        <Icon name="edit" size={20} style={{ marginRight: 5 }} />
                                    </TouchableOpacity>
                                </View>


                            </View>
                            <View >
                                <Text style={styles.title}>Email</Text>
                                <View style={{
                                    width: width - 15,
                                    height: height * 0.065, backgroundColor: header_text, borderRadius: 15
                                    , borderWidth: 1, borderColor: border_color, flexDirection: 'row',
                                    justifyContent: 'space-between', alignItems: 'center'
                                }}>
                                    <Text style={styles.text} >{this.state.emailAddress}</Text>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("ChangeEmail", { emailAddress: this.state.emailAddress }) }
                                    } >
                                        <Icon name="edit" size={20} style={{ marginRight: 5 }} />
                                    </TouchableOpacity>
                                </View>

                            </View>




                        </View>
                        <View style={{ marginTop: 20, borderTopWidth: 1, borderColor: border_color2, width: width }}>
                            <TouchableOpacity style={[styles.touchableOpacity, { marginTop: 20 }]}
                                onPress={() => { this.props.navigation.navigate("History") }
                                }                            >
                                <Icon name="history" size={20} style={{ margin: "2%" }} />
                                <Text style={[styles.title, { fontSize: 18, fontWeight: 'bold' }]}>History</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.touchableOpacity}>
                                <Icon name="bell" size={20} style={{ margin: "2%" }} />
                                <Text style={[styles.title, { fontSize: 18, fontWeight: 'bold' }]}>Notifications</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableOpacity}
                                onPress={() => { this.props.navigation.navigate("ChangePassword") }
                                }
                            >
                                <Icon name="edit" size={20} style={{ margin: "2%" }} />
                                <Text style={[styles.title, { fontSize: 18, fontWeight: 'bold' }]}>Change password</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.touchableOpacity}>

                                <Icon name="shield" size={20} style={{ margin: "2%" }} />
                                <Text style={[styles.title, { fontSize: 18, fontWeight: 'bold' }]}>Privacy policy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.touchableOpacity}>
                                <Icon name="question-circle" size={20} style={{ margin: "2%" }} />
                                <Text style={[styles.title, { fontSize: 18, fontWeight: 'bold' }]}>Help center</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.touchableOpacity, { backgroundColor: button, marginBottom: 5 }]}>
                                <Icon name="sign-out" size={20} style={{ margin: "2%" }} />
                                <Text style={[styles.title, { fontSize: 18, fontWeight: 'bold', color: '#272425' }]}>Logout</Text>
                            </TouchableOpacity>

                        </View>
                    </ScrollView>
                </View>

            </>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        marginLeft: 5,
        alignSelf: 'center',
        width: "90%"
    },
    title: {
        fontSize: 15, color: '#fff', padding: '1%'
    },
    touchableOpacity: {
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 15,
        width: width - 10,
        marginTop: 10,
        paddingRight: 50,
        backgroundColor: border_color2,
        fontSize: 16,
        flexDirection: 'row',
        height: height * 0.065, alignItems: 'center'
    },


});



const Stack = createStackNavigator();
export default function () {
    
    return (
     
    <Stack.Navigator 
    screenOptions={{
        headerShown: false
      }} 
    >
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
       
      />
      <Stack.Screen
        name="ChangeName"
        component={ChangeName}
      />

       <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
      />

<Stack.Screen
        name="ChangeEmail"
        component={ChangeEmail}
      />

<Stack.Screen
        name="History"
        component={History}
      />



       </Stack.Navigator>
      
    );
  }
