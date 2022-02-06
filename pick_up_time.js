
import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, FlatList, Alert, Dimensions, StatusBar, Rad, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, next, border_color, border_color2 } from './Colors'
const { width, height } = Dimensions.get('window');
//import CheckoutIdentfication from './Tasks/CheckoutIdentfication'
import moment from "moment";
import DateRangePicker from "rnv-date-range-picker";

export default class pick_up_time extends React.Component {
    constructor() {
        super();
        this.state = {
            car_name: '',
            car_img: '',
            car_price: '',
            num_stars: 0,

            selectedRange: '',
            // setRange:'',
            firstDate: '',
            secondDate: '',
        }
    }



    componentDidMount() {
        let car_name = this.props.route.params.car_name
        let car_img = this.props.route.params.car_img
        let car_price = this.props.route.params.car_price
        let num_stars = this.props.route.params.num_stars
        this.setState({
            car_name: car_name,
            car_img: car_img,
            car_price: car_price,
            num_stars: num_stars,   
        })
    }


    render() {
        return (
            <>
                <StatusBar backgroundColor={backgroundColor} />
                <View style={{
                    backgroundColor: backgroundColor,
                    flex: 1,
                }}>
                    <ScrollView>

                        <SafeAreaView>
                            <View style={{
                                margin: height * .125,
                                backgroundColor: '#fff',
                                width: width * .9,
                                alignSelf: 'center'
                            }}>

                                <DateRangePicker
                                    onSelectDateRange={(range) => {
                                        this.setState(range);
                                    }}
                                    responseFormat="YYYY-MM-DD"
                                    maxDate={moment().add(100, "months")}
                                    minDate={moment().add(0, "days")}
                                />
                                <View style={{ margin: 20 }}>
                                    <Text>first date: {this.state.firstDate}</Text>
                                    <Text>second date: {this.state.secondDate}</Text>
                                </View>
                            </View>
                        </SafeAreaView>

                        <View style={{
                            alignItems: 'center',
                            height: height * .15,
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                   
                                    this.props.navigation.navigate('CheckoutPersonal', {
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