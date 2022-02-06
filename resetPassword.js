import * as React from 'react'
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Modal, FlatList, Alert, Dimensions, StatusBar, Rad } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { ScrollView } from 'react-native-gesture-handler'
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, next, border_color, border_color2 } from  '../Tasks/Colors'
const { width, height } = Dimensions.get('window');
export default class resetPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            passwordError: '',
            confirmPassword: '',
            confirmPasswordError: '',
            secureTextEntry: true,
            secureTextEntry2: true,
            icon: 'eye-slash',
            icon2: 'eye-slash',
            color: next,
            color2: next
        }
    }
    secureFun() {
        if (this.state.secureTextEntry == false) {
            this.setState({ secureTextEntry: true, icon: 'eye-slash', color: next })
        } else if (this.state.secureTextEntry == true) {
            this.setState({ secureTextEntry: false, icon: 'eye', color: button })
        }
    }
    secureFun2() {
        if (this.state.secureTextEntry2 == false) {
            this.setState({ secureTextEntry2: true, icon2: 'eye-slash', color2: next })
        } else if (this.state.secureTextEntry2 == true) {
            this.setState({ secureTextEntry2: false, icon2: 'eye', color2: button })
        }
    }
    validationFun() {
        let errors = 0
        // password
        if (this.state.password.trim() == "") {
            this.setState({ passwordError: 'Please, Enter the password ' })
            errors++
        } else if ((this.state.password.trim()).length < 6) {
            this.setState({ passwordError: 'password must be 6 char or more' })
        } else {
            this.setState({ passwordError: '' })
        }
        //confirm password
        if (this.state.confirmPassword.trim() == "") {
            this.setState({ confirmPasswordError: 'Password must be confirmed' })
            errors++
        } else if ((this.state.confirmPassword.trim()).length < 6) {
            this.setState({ confirmPasswordError: 'password must be 6 char or more' })
        } else {
            this.setState({ confirmPasswordError: '' })
        }

        if (errors == 0 && this.state.password == this.state.confirmPassword) {
            alert('Done')
            this.props.navigation.navigate('Login')
        } else if (this.state.password != this.state.confirmPassword) {

            this.setState({ confirmPasswordError: 'The password must be entered correctly' })
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
                                <Icon name='chevron-left' color={chevron_left} size={20}></Icon>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <Text
                        style={{
                            fontSize: 25,
                            marginTop: 20,
                            alignSelf: 'center',
                            color: personal,


                        }} >reset Password</Text>
                    <ScrollView>

                        <View style={{
                            width: width - 30, alignSelf: 'center', flexDirection: 'row', marginTop: 20, backgroundColor: textInput, borderWidth: 1,
                            borderRadius: 17
                        }}>
                            <Icon name='lock' size={19} style={{ color: user, marginTop: 15, marginLeft: 10 }}></Icon>
                            <TextInput
                                secureTextEntry={this.state.secureTextEntry}
                                value={this.state.password}
                                onChangeText={(value) => {
                                    this.setState({ password: value })
                                }}
                                placeholder='Enter your Password'

                                style={{
                                    // borderWidth: 1,
                                    borderRadius: 17,
                                    width: '80%',
                                    backgroundColor: textInput,
                                    fontSize: 16,
                                }}
                            >
                            </TextInput>

                            <TouchableOpacity
                                onPress={() => {
                                    this.secureFun()
                                }}
                                style={{ marginTop: 15, marginLeft: 5 }}>
                                <Icon name={this.state.icon} size={19} color={this.state.color} />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: button, alignSelf: 'center', fontWeight: 'bold' }}>{this.state.passwordError}</Text>
                        <View style={{
                            width: width - 30, alignSelf: 'center', flexDirection: 'row', marginTop: 20, backgroundColor: textInput, borderWidth: 1,
                            borderRadius: 17
                        }}>
                            <Icon name='lock' size={19} style={{ color: user, marginTop: 15, marginLeft: 10 }}></Icon>
                            <TextInput
                                secureTextEntry={this.state.secureTextEntry2}
                                value={this.state.confirmPassword}
                                onChangeText={(value) => {
                                    this.setState({ confirmPassword: value })
                                }}
                                placeholder='Confirm Password'
                                style={{
                                    borderRadius: 17,
                                    width: '80%',
                                    backgroundColor: textInput,
                                    fontSize: 16,
                                }}
                            >
                            </TextInput>

                            <TouchableOpacity onPress={() => {
                                this.secureFun2()
                            }}
                                style={{ marginTop: 15, marginLeft: 5 }}>
                                <Icon name={this.state.icon2} size={19} color={this.state.color2} />

                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: button, alignSelf: 'center', fontWeight: 'bold' }}>{this.state.confirmPasswordError}</Text>
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
                                }}>Done</Text>
                        </TouchableOpacity>
                    </ScrollView>



                </View>
            </>
        )
    }
}