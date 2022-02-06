import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, FlatList, Alert, Dimensions, StatusBar, Rad } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, next, border_color, border_color2, radio, text, plus, price, car_detail, cost } from '../Tasks/Colors'
const { width, height } = Dimensions.get('window');

export default class CheckoutPersonal extends React.Component {
    constructor() {
        super();
        this.state = {
           
            deposit: '80$',
            duration: 'From 12 Mar To 15 Mar',
            address: 'Cairo',
            card_num:0,
            car_name: '',
            car_img: '',
            car_price: '',
            num_stars: 0,
            firstDate: '',
            secondDate: '',
        }
    }

    
    componentDidMount(){
        let car_name = this.props.route.params.car_name
        let car_img = this.props.route.params.car_img
        let car_price = this.props.route.params.car_price
        let num_stars = this.props.route.params.num_stars
        let card_num = this.props.route.params.card_num
        let firstDate =this.props.route.params.firstDate
        let secondDate = this.props.route.params.secondDate
        this.setState({
            
            car_name: car_name,
            car_img: car_img,
            car_price: car_price,
            num_stars: num_stars,
            card_num:card_num,
            firstDate:firstDate,
            secondDate:secondDate
            
        })
    }


    render() {

        return (
            <>
                <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
                    <ScrollView>
                        <StatusBar backgroundColor={backgroundColor} />
                        <View style={{ flex: 0.1, flexDirection: 'row', justifyContent: 'center', marginTop: '5%' }}>
                            <View style={{ width: '60%', }}>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        marginRight: 26,
                                        color: header_text,
                                        marginBottom: 17,
                                        marginTop: 12
                                    }}>Summary</Text>
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
                                    marginLeft: 50
                                }}>
                                <Icon name='chevron-left' color={chevron_left} size={20} ></Icon>
                            </TouchableOpacity>
                        </View>
                      
                                <View style={{ flex: 0.7 }}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            marginTop: 15,
                                            marginRight: 15,
                                            color: personal,
                                            // marginBottom: 10
                                        }} >{this.state.car_name}</Text>

                                    <Image source={this.state.car_img} style={{ width: '50%', height: '235%', marginTop: '-3.5%' }}></Image>
                                    <View style={{ width: '50%', marginLeft: '50%', marginTop: '-12%' }}>
                                        <Image source={require('../img/star.png')} style={{
                                            width: '9%',
                                            height: '35%',
                                            marginLeft: '80%',
                                            marginTop: '7%'
                                        }}></Image>
                                        <Text
                                            style={{
                                                marginTop: '-6%',
                                                fontSize: 12,
                                                fontWeight: 'bold',
                                                marginRight: '25%',
                                                color: text,

                                            }}
                                        >{this.state.num_stars}</Text>
                                    </View>
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: 'bold',
                                        marginRight: 15,
                                        color: header_text,
                                        color: price,
                                        marginTop: 10
                                    }}>{this.state.car_price}</Text>


                                </View>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginTop: 110,
                                        marginRight: 15,
                                        color: personal,
                                        // marginBottom: 10
                                    }} >Payment Method--</Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginTop: 10,
                                        marginRight: 15,
                                        color: car_detail,
                                        // marginBottom: 10
                                    }} >{this.state.card_num}</Text>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginTop: 15,
                                        marginRight: 15,
                                        color: personal,
                                        // marginBottom: 10
                                    }} >Receipt Info--</Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginTop: 10,
                                        marginRight: 15,
                                        color: car_detail,
                                        // marginBottom: 10
                                    }} >{this.state.address}</Text>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginTop: 15,
                                        marginRight: 15,
                                        color: personal,
                                        // marginBottom: 10
                                    }} >Rent duration--</Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginTop: 10,
                                        marginRight: 15,
                                        color: car_detail,
                                        // marginBottom: 10
                                    }} >from : {this.state.firstDate}  To : {this.state.secondDate}</Text>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginTop: 15,
                                        marginRight: 15,
                                        color: personal,
                                        // marginBottom: 10
                                    }} >Deposit--</Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 'bold',
                                        marginTop: 10,
                                        marginRight: 15,
                                        color: car_detail,
                                        // marginBottom: 10
                                    }} >{this.state.deposit}</Text>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        marginTop: 15,
                                        marginRight: 15,
                                        color: personal,
                                        // marginBottom: 10
                                    }} >Total Cost:   <Text
                                        style={{
                                            fontSize: 20,
                                            fontWeight: 'bold',
                                            marginTop: 10,
                                            marginRight: 15,
                                            color: car_detail,
                                            // marginBottom: 10
                                        }} >{this.state.car_price}</Text>
                                </Text>


                                <View style={{ 
                           
                           alignItems:'center',
                          // backgroundColor:'#ddd',
                           justifyContent:'flex-end',
                           height:height*.15,
                           }}>
                               <TouchableOpacity
                                   onPress={() => {
                                    
                                     this.props.navigation.navigate('Rented',{
                                        car_img: this.state.car_img,
                                        car_name: this.state.car_name,
                                        car_price: this.state.price,
                                        num_stars: this.state.num_stars,
                                        card_num:this.state. card_num,
                                        firstDate: this.state.firstDate,
                                        secondDate: this.state.secondDate,
                                     })
                                   }}
                                   style={{
                                       width: '93%',
                                       height:height*.075 ,
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
                                       }}>Confirm Rental</Text>
                               </TouchableOpacity>
                           </View>


                        
                    </ScrollView>
                </View>
            </>
        )
    }
}
