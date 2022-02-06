import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, FlatList, Alert, Dimensions, StatusBar, Rad,SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, next, border_color, border_color2 } from './Colors'
const { width, height } = Dimensions.get('window');
//import CheckoutIdentfication from './Tasks/CheckoutIdentfication'
import moment from "moment";
import DateRangePicker from "rnv-date-range-picker";

export default class CheckoutPersonal extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            address: '',
            email: '',
            car_name: '',
            car_img: '',
            car_price: '',
            num_stars: 0,

            selectedRange:'',
            // setRange:'',
             firstDate:'',
             secondDate:'',
        }
    }


    


    componentDidMount() {
        let car_name = this.props.route.params.car_name
        let car_img = this.props.route.params.car_img
        let car_price = this.props.route.params.car_price
        let num_stars = this.props.route.params.num_stars
        let firstDate =this.props.route.params.firstDate
        let secondDate = this.props.route.params.secondDate
        this.setState({
            car_name: car_name,
            car_img: car_img,
            car_price: car_price,
            num_stars: num_stars,
            firstDate:firstDate,
            secondDate:secondDate

        })
    }




    render() {

        return (
            <>
                <StatusBar backgroundColor={backgroundColor} />
                <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
                    <ScrollView>

                        <View style={{
                            flex: 0.1, flexDirection: 'row',
                            justifyContent: 'center', marginTop: '5%',
                        }}>
                            <View style={{ width: '60%', }}>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        marginRight: 26,
                                        color: header_text,
                                        marginBottom: 17,
                                        marginTop: 12
                                    }}>CheckOut</Text>
                            </View>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        this.props.navigation.goBack()
                                    }
                                }
                                style={{
                                    width: '9%',
                                    height: '50%',
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    marginLeft: '18%'
                                }}>
                                <Icon name='chevron-left' color={chevron_left} size={22} ></Icon>
                            </TouchableOpacity>
                        </View>

                        <View style={{ width: width, height: height * .72, }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: height * .03,
                                    marginRight: 15,
                                    color: personal,
                                    // marginBottom: 10
                                }} >Personal Info --</Text>

                            <View style={{
                                width: '93%',
                                height: height * .07,
                                backgroundColor: '#0f0',
                                paddingLeft: '7%',
                                backgroundColor: textInput,
                                borderColor: border_color,
                                alignItems: 'center',
                                borderRadius: 17,
                                borderWidth: 1,
                                alignSelf: 'center',
                                marginTop: height * .05,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                paddingLeft: 15,
                                paddingRight: 10,

                            }}>
                                <TextInput
                                    onChangeText={(value) => {
                                        this.setState({ name: value })
                                    }}
                                    placeholder='Full Name'
                                    multiline={true}
                                    style={{

                                    }}
                                >
                                </TextInput>
                                <Icon name='user' size={19} style={{ color: user, marginLeft: 5 }}></Icon>
                            </View>

                            <View style={{
                                width: '93%',
                                height: height * .07,
                                backgroundColor: '#0f0',
                                // paddingLeft: '7%',
                                backgroundColor: textInput,
                                borderColor: border_color,
                                alignItems: 'center',
                                borderRadius: 17,
                                borderWidth: 1,
                                alignSelf: 'center',
                                marginTop: height * .05,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                paddingLeft: 15,
                                paddingRight: 10
                            }}>
                                <TextInput
                                    onChangeText={(value) => {
                                        this.setState({ phone: value })
                                    }}
                                    placeholder='Phone Number'
                                    keyboardType='number-pad'
                                    multiline={true}
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                </TextInput>
                                <Icon name='mobile' size={20} style={{ color: user, marginLeft: 5 }}></Icon>
                            </View>


                            <View style={{
                                width: '93%',
                                height: height * .07,
                                backgroundColor: '#0f0',
                                // paddingLeft: '7%',
                                backgroundColor: textInput,
                                borderColor: border_color,
                                alignItems: 'center',
                                borderRadius: 17,
                                borderWidth: 1,
                                alignSelf: 'center',
                                marginTop: height * .05,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                paddingLeft: 15,
                                paddingRight: 10
                            }}>
                                <TextInput
                                    onChangeText={(value) => {
                                        this.setState({ address: value })
                                    }}
                                    placeholder='Address'
                                    keyboardType=''
                                    multiline={true}
                                    style={{
                                        fontSize: 16,
                                    }}
                                >
                                </TextInput>
                                <Icon name='map-marker-alt' size={20} style={{ color: user, marginLeft: 5 }}></Icon>
                            </View>


                            <View style={{
                                width: '93%',
                                height: height * .07,
                                backgroundColor: '#0f0',
                                // paddingLeft: '7%',
                                backgroundColor: textInput,
                                borderColor: border_color,
                                alignItems: 'center',
                                borderRadius: 17,
                                borderWidth: 1,
                                alignSelf: 'center',
                                marginTop: height * .05,
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                paddingLeft: 15,
                                paddingRight: 10
                            }}>
                                <TextInput
                                    onChangeText={(value) => {
                                        this.setState({ email: value })
                                    }}
                                    placeholder='Email'
                                    keyboardType='email-address'
                                    multiline={true}
                                    style={{
                                        fontSize: 16,

                                    }}
                                >
                                </TextInput>
                                <Icon name='envelope' size={20} style={{ color: user, marginLeft: 5 }}></Icon>
                            </View>

                        </View>
                          

                        <View style={{
                            alignItems: 'center',
                            height: height * .15,
                        }}>
                            <TouchableOpacity
                                onPress={() => {   
                                 
                                    this.props.navigation.navigate('CheckoutIdentfication', {
                                        name: this.state.name,
                                        address: this.state.address,
                                        phone: this.state.phone,
                                        email: this.state.email,
                                        car_img: this.state.car_img,
                                        car_name: this.state.car_name,
                                        car_price: this.state.car_price,
                                        num_stars: this.state.num_stars,
                                        firstDate: this.state.firstDate,
                                        secondDate: this.state.secondDate,
                                    })
                                }}
                                style={{
                                    width: '93%',
                                    height: height * .075,
                                    backgroundColor: button,
                                    alignSelf: 'center',
                                    // marginTop: 50,
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
                                    }}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}
