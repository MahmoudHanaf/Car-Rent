
import * as React from 'react'
import {
    Text, StyleSheet, View, ScrollView, Switch, TextInput, Dimensions,
    StatusBar, Image, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, text, border_color, border_color2 } from '../Tasks/Colors'

const { width, height } = Dimensions.get('window');
export default class ChangePassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            currentPassword: '',
            currentPasswordError: '',
            password: '',
            passwordError: '',
            confirmPassword: '',
            confirmPasswordError: ''
        }
    }

    validationFun() {
        let errors = 0
        // current password
        if (this.state.currentPassword.trim().length == 0) {
            this.setState({ currentPasswordError: 'You must enter a password' })
            errors++
        }
        else if (this.state.currentPassword.length <= 8) {
            this.setState({ currentPasswordError: 'Enter a valid password and try agian' })
            errors++
        } else {
            this.setState({ currentPasswordError: '' })
        }


        // new password
        if (this.state.password.trim().length == 0) {
            this.setState({ passwordError: 'You must enter a password' })
            errors++
        }
        else if (this.state.password.length <= 8) {
            this.setState({ passwordError: 'The password must be 8 characters or more' })
            errors++
        } else {
            this.setState({ passwordError: '' })
        }
        // confirm password
        if (this.state.confirmPassword.trim().length == 0) {
            this.setState({ confirmPasswordError: 'You must confirm your password' })
            errors++
        }
        else if (this.state.password != this.state.confirmPassword) {
            this.setState({ confirmPasswordError: 'you must enter the same password twice in order to confirm' })
            errors++
        } else {
            this.setState({ confirmPasswordError: '' })
        }
        if (errors == 0) {
            // this.props.navigation.navigate('')
        }
    }

    render() {
        return (
            <>

                <View style={{ flex: 1, backgroundColor: backgroundColor }}>
                    <ScrollView >
                        <StatusBar
                            backgroundColor={backgroundColor}
                        />
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
                                    color:'#fff',textAlign:'center',
                                }}
                            >Change Password</Text>
                             <TouchableOpacity
                             onPress={()=>{
                                 this.props.navigation.goBack()
                             }}
                                style={{   }}
                            >
                                <Icon name={'chevron-left'} size={22} color='#fff'
                                    style={{  }} />
                            </TouchableOpacity>
                        </View>
                        {/* content */}

                        <View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.title}>Current password</Text>
                                <TextInput
                                    placeholder='enter your current password'
                                    secureTextEntry={true}
                                    style={styles.textinput}
                                    value={this.state.currentPassword}
                                    onChangeText={(value) => {
                                        this.setState({ currentPassword: value })
                                    }}
                                />
                                <Text style={{ alignSelf: 'center', color: '#FA6E6E' }}>{this.state.currentPasswordError}</Text>

                            </View>

                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.title}>New password</Text>
                                <TextInput
                                    placeholder='enter a new password'
                                    secureTextEntry={true}
                                    style={styles.textinput}
                                    value={this.state.password}
                                    onChangeText={(value) => {
                                        this.setState({ password: value })
                                    }}
                                />
                                <Text style={{ alignSelf: 'center', color: '#FA6E6E' }}>{this.state.passwordError}</Text>
                            </View>
                            <View style={{ marginTop: 10, marginBottom: "20%" }}>
                                <Text style={styles.title}>Confirm password</Text>
                                <TextInput
                                    placeholder='confirm your password'
                                    secureTextEntry={true}
                                    style={styles.textinput}
                                    value={this.state.confirmPassword}
                                    onChangeText={(value) => {
                                        this.setState({ confirmPassword: value })
                                    }}
                                />
                                <Text style={{ alignSelf: 'center', color: '#FA6E6E' }}>{this.state.confirmPasswordError}</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => { this.validationFun() }
                                }
                                style={{
                                    width: width - 20,
                                    height: height * 0.08,
                                    backgroundColor: border_color,
                                    alignSelf: 'center',
                                    borderRadius: 15,
                                    marginBottom: 5
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginTop: 13,
                                        color: '#fff',


                                    }}>Confirm</Text>
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
        padding: 7
    },
    title: {
        fontSize: 15,
        color: text
        , marginLeft: 10,
        marginRight:10,
    },
    textinput: {

        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 15,
        width: width - 20,
        marginTop: 10,
        paddingRight: 50,
        backgroundColor: border_color2,
        fontSize: 16,
        borderColor: border_color

    },
    image: {
        width: '10%',

        height: '65%',
        marginLeft: 5

    },
    touchableOpacity: {
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 15,
        width: width - 10,
        marginTop: 20,
        paddingRight: 50,
        backgroundColor: border_color2,
        fontSize: 16,
        flexDirection: 'row',
        height: height * 0.065,
        alignItems: 'center'
    },

});
