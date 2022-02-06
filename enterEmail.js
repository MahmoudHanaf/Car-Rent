import * as React from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Modal, FlatList, Alert, Dimensions, StatusBar, Rad } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler'
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, next, border_color, border_color2 } from '../Tasks/Colors'
const { width, height } = Dimensions.get('window');
export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailError: '',
        }
    }

    validateEmail = email => {
        let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
        if (reg.test(email) === false) {
            return false;
        } else {
            return true;
        }
    };
    validationFun() {
        let errors = 0
        //email
        if (this.state.email == "") {
            this.setState({ emailError: 'Please, enter your Email' })
            errors++
        } else if (!this.validateEmail(this.state.email)) {
            this.setState({ emailError: 'Please, enter an available Email' })
        } else {
            this.setState({ emailError: '' })
        }
        if (errors == 0 && this.validateEmail(this.state.email)) {
            alert('Done')
            this.props.navigation.navigate('Verification')
        } else {
            alert("The data must entered correctly")
        }
    }

    render() {
        return (
            <>
                <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
                    <StatusBar backgroundColor={backgroundColor} />
                    <View>
                        <View>
                            <TouchableOpacity
                                style={{
                                    marginLeft: 20,
                                    marginTop: 30

                                }}
                                onPress={
                                    () => {
                                        this.props.navigation.navigate('Login')
                                    }
                                }
                            >
                                <Icon name='chevron-left' color={chevron_left} size={20} style={{}}></Icon>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <Text
                        style={{
                            fontSize: 25,

                            marginTop: 20,
                            marginLeft: 20,
                            color: personal,

                        }} >Enter your email</Text>
                    <ScrollView>
                        <View style={{
                            width: width - 30, alignSelf: 'center', flexDirection: 'row', marginTop: 20, backgroundColor: textInput, borderWidth: 1,
                            borderRadius: 17,borderColor:button
                        }}>
                            <Icon name='envelope' size={19} style={{ color: user, marginTop: 15, marginLeft: 10 }}></Icon>
                            <TextInput
                                keyboardType='email-address'
                                value={this.state.email}
                                onChangeText={(value) => {
                                    this.setState({ email: value })
                                }}
                                placeholder='Enter your email'
                                multiline={true}
                                style={{
                                    alignSelf: 'center',

                                    borderRadius: 17,
                                    width: '90%',
                                    backgroundColor: textInput,
                                    fontSize: 16,
                                    paddingLeft: 10,
                                    paddingRight: 10,

                                }}

                            >
                            </TextInput>

                        </View>
                        <Text style={{ color: button, alignSelf: 'center', fontWeight: 'bold' }}>{this.state.emailError}</Text>
                
                        <TouchableOpacity
                            onPress={
                                () => {
                                    if (this.validationFun() == true) {

                                    }
                                }
                            }
                            style={{
                                width: width - 20,
                                height: width - 305,
                                backgroundColor: button,
                                alignSelf: 'center',
                                marginTop: 30,
                                borderRadius: 15
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 13,
                                    color: next
                                }}>Send verification code</Text>
                        </TouchableOpacity>
                    </ScrollView>



                </View>
            </>
        )
    }
}