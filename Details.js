import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, FlatList, Alert, Dimensions, StatusBar, Rad } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, next, border_color, border_color2, radio, text, plus, price, car_detail } from './Colors'

const { width, height } = Dimensions.get('screen');
//import { Container, Header, Content, ListItem, Radio, Right, Left, Badge } from 'native-base';
//import * as ImagePicker from 'react-native-image-picker';
export default class Details extends React.Component {
    constructor() {
        super();
        this.state = {

            carDetails: {},
            index: 0,
            car_name:'',
            car_price:'',
            car_img:'',
            num_stars:0,
        }
    }

    componentDidMount() {
        let carDetails = this.props.route.params.carDetails
        let index = this.props.route.params.index
        let car_name = this.props.route.params.car_name
        let car_img = this.props.route.params.car_img
        let car_price = this.props.route.params.car_price
        let num_stars = this.props.route.params.num_stars
        this.setState({
            carDetails: carDetails,
            index: index,
            car_name:car_name,
            car_img:car_img,
            car_price:car_price,
            num_stars:num_stars,
        })
    }


    render() {

        return (
            <>

                <StatusBar backgroundColor={backgroundColor} />

                <View style={{ backgroundColor: backgroundColor, width: '100%', height: '100%' }}>
                    <ScrollView style={{}}>

                        <Image source={this.state.carDetails.item_photo}
                            style={{ width: width, height: height * .24,resizeMode:'contain' }}
                        />



                        <View
                            style={{
                                width: width,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingLeft: 10,
                                paddingRight: 10,
                                marginTop: 15
                            }}
                        >

                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold',
                                marginLeft: 10,
                                color: header_text,
                                color: price,

                            }}>{this.state.carDetails.price}
                            </Text>


                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                // marginLeft: '45%',
                                color: text,

                                alignSelf: 'flex-end',
                            }}>{this.state.carDetails.item_name}
                            </Text>


                        </View>



                        <View
                            style={{
                                width: width,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingLeft: 15,
                                paddingRight: 15,
                                marginTop: 10
                            }}
                        >

                            <Image source={require('../img/star.png')} style={{
                                width: 20,
                                height: 20,
                                //resizeMode:'contain'
                            }} />

                            <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    marginLeft: 10,
                                    color: text,
                                }}
                            >{this.state.carDetails.num_stars}</Text>
                        </View>

                        <Text
                            style={{
                                fontSize: 19,
                                marginTop: 13,
                                marginRight: 15,
                                color: personal,
                                // marginBottom: 40
                            }} >Featuers---</Text>

                        <View
                            style={{
                                width: width,
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingLeft: 15,
                                paddingRight: 15,
                                marginTop: 10
                            }}
                        >
                            <Text style={{ color: text, fontSize: 17, marginLeft: 10, }}>Senseor</Text>
                            <Image source={require('../img/sports-car.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 15, marginRight: height * .07 }}></Image>

                            <Text style={{ color: text, fontSize: 17, marginLeft: .05, }}>Condition</Text>
                            <Image source={require('../img/mm.png')}
                                style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 15, }}></Image>

                        </View>


                        <Text
                            style={{
                                fontSize: 19,
                                marginTop: 13,
                                marginRight: 15,
                                color: personal,
                                // marginBottom: 40
                            }} >Car Details---</Text>



                        <View
                            style={{
                                width: width,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingLeft: 15,
                                paddingRight: 15,
                                marginTop: 10,
                                flexDirection: 'row',
                            }}
                        >
                            <View style={{ width: width * .25, }}>
                                <Text style={{ color: car_detail, fontSize: 17, textAlign: 'left' }}>{this.state.carDetails.color}</Text>
                            </View>
                            <View style={{ width: width * .35, backgroundColor: car_detail, height: 3, alignSelf: 'center' }}></View>


                            <View style={{ width: width * .25, }}>
                                <Text style={{ color: car_detail, fontSize: 17, }}>Color</Text>
                            </View>

                        </View>


                        <View
                            style={{
                                width: width,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingLeft: 15,
                                paddingRight: 15,
                                marginTop: 10,
                                flexDirection: 'row',
                            }}
                        >

                            <View style={{ width: width * .25 }}>
                                <Text style={{ color: car_detail, fontSize: 17, textAlign: 'left' }}>{this.state.carDetails.licence_no}</Text>
                            </View>
                            <View style={{ width: width * .35, backgroundColor: car_detail, height: 3, }}></View>

                            <View style={{ width: width * .25, }}>
                                <Text style={{ color: car_detail, fontSize: 17, }}>licence_no</Text>
                            </View>
                        </View>

                        <View
                            style={{
                                width: width,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingLeft: 15,
                                paddingRight: 15,
                                marginTop: 10,
                                flexDirection: 'row',
                            }}
                        >

                            <View style={{ width: width * .25 }}>
                                <Text style={{ color: car_detail, fontSize: 17, textAlign: 'left' }}>{this.state.carDetails.plate_no}</Text>
                            </View>
                            <View style={{ width: width * .35, backgroundColor: car_detail, height: 3, }}></View>

                            <View style={{ width: width * .25, }}>
                                <Text style={{ color: car_detail, fontSize: 17, }}>Plate_no</Text>
                            </View>
                        </View>


                        <View
                            style={{
                                width: width,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexDirection: 'row',
                                paddingLeft: 15,
                                paddingRight: 15,
                                marginTop: 10,
                                flexDirection: 'row',
                            }}
                        >

                            <View style={{ width: width * .25 }}>
                                <Text style={{ color: car_detail, fontSize: 17, textAlign: 'left' }}>{this.state.carDetails.price}</Text>
                            </View>
                            <View style={{ width: width * .35, backgroundColor: car_detail, height: 3, }}></View>

                            <View style={{ width: width * .25, }}>
                                <Text style={{ color: car_detail, fontSize: 17, }}>Price</Text>
                            </View>
                        </View>


                        <Text
                            style={{
                                fontSize: 19,
                                marginTop: 13,
                                marginRight: 15,
                                color: personal,
                                // marginBottom: 40
                            }} >Descreption---</Text>

                        <Text
                         numberOfLines={2}
                            style={{
                                marginRight: '1%',
                                paddingLeft: '5%',
                                color: car_detail,
                                fontSize: 17,
                                marginLeft: '2%',
                               
                            }}>{this.state.carDetails.description}</Text>

                        <TouchableOpacity
                           onPress={()=>{
                               this.props.navigation.navigate("pick_up_time",{
                                car_img:this.state.car_img,
                                car_name:this.state.car_name,
                                car_price:this.state.car_price,
                                num_stars:this.state.num_stars
                               })
                           }}
                            style={{
                                width: '90%',
                                height: '6.5%',
                                backgroundColor: button,
                                alignSelf: 'center',
                                marginTop: 15,
                                borderRadius: 15,
                                marginBottom: height * .08
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 13,
                                    color: next
                                }}>Check Avalibility</Text>
                        </TouchableOpacity>














                    </ScrollView>
                </View>

            </>
        )
    }
}
//////////////////////////////////////////////////////////////////////
