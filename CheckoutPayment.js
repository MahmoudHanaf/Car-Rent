import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, FlatList, Alert, Dimensions, StatusBar, Rad } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, next, border_color, border_color2 } from './Colors'
const { width, height } = Dimensions.get('window');

export default class CheckoutPayment extends React.Component {
    constructor() {
        super();
        this.state = {
           
            licence_expiry_date:'',
            licence_num:0,
            name:'',
            address:'',
            phone:0,
            email:'',
            id:0,
            card_num:0,
            card_holder_name:'',
            expiry_date:'',
            CVV:0,
            car_name: '',
            car_img: '',
            car_price: '',
            num_stars: 0,
            firstDate: '',
            secondDate: '',
        }
    }

   
    componentDidMount(){
        let name= this.props.route.params.name
        let address =this.props.route.params.address
        let phone=this.props.route.params.phone
        let email =this.props.route.params.email
        let id =this.props.route.params.id
        let licence_expiry_date =this.props.route.params.licence_expiry_date
        let  licence_num=this.props.route.params.licence_num
        let car_name = this.props.route.params.car_name
        let car_img = this.props.route.params.car_img
        let car_price = this.props.route.params.car_price
        let num_stars = this.props.route.params.num_stars
        let firstDate =this.props.route.params.firstDate
        let secondDate = this.props.route.params.secondDate
        this.setState({
            name:name,
            address:address,
            phone:phone,
            email:email,
            id:id,
            licence_expiry_date:licence_expiry_date,
            licence_num: licence_num,
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
                <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
                    <StatusBar backgroundColor={backgroundColor} />
                    <ScrollView>
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
                                    marginLeft: 50
                                }}>
                                <Icon name='chevron-left' color={chevron_left} size={20} ></Icon>
                            </TouchableOpacity>
                        </View>

                        <View style={{  width:width,height:height*.65, }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 10,
                                    marginRight: 15,
                                    color: personal,
                                    marginBottom: 20
                                }} >Payment.</Text>


                         <View style={{
                               width: '93%',
                               height:height*.07,
                               backgroundColor:'#0f0',
                               paddingLeft: '7%',
                               backgroundColor: textInput,
                               borderColor: border_color,
                               alignItems:'center',
                               borderRadius: 17,
                               borderWidth: 1,
                               alignSelf:'center',
                               marginTop:height*.05,
                               flexDirection:'row',
                               justifyContent:'flex-end',
                               paddingLeft:15,
                               paddingRight:10,
                              
                               }}>
                            <TextInput
                            onChangeText={(value)=>{
                                this.setState({card_num:value})
                            }}
                                placeholder='Card Number'
                                keyboardType='number-pad'
                                multiline={true}
                                style={{
                                   
                                }}
                            >
                            </TextInput>
                            <Icon name='credit-card' size={19} style={{color: user,marginLeft:5 }}></Icon>
                            </View>

                            <View style={{
                               width: '93%',
                               height:height*.07,
                               backgroundColor:'#0f0',
                               paddingLeft: '7%',
                               backgroundColor: textInput,
                               borderColor: border_color,
                               alignItems:'center',
                               borderRadius: 17,
                               borderWidth: 1,
                               alignSelf:'center',
                               marginTop:height*.05,
                               flexDirection:'row',
                               justifyContent:'flex-end',
                               paddingLeft:15,
                               paddingRight:10,
                              
                               }}>
                            <TextInput
                             onChangeText={(value)=>{
                                this.setState({card_holder_name:value})
                            }}
                                placeholder='Card Holder Name'
                                multiline={true}
                                style={{
                                   
                                }}
                            >
                            </TextInput>
                            <Icon name='user' size={19} style={{color: user,marginLeft:5 }}></Icon>
                            </View>


                            <View style={{
                               width: '93%',
                               height:height*.07,
                               backgroundColor:'#0f0',
                               paddingLeft: '7%',
                               backgroundColor: textInput,
                               borderColor: border_color,
                               alignItems:'center',
                               borderRadius: 17,
                               borderWidth: 1,
                               alignSelf:'center',
                               marginTop:height*.05,
                               flexDirection:'row',
                               justifyContent:'flex-end',
                               paddingLeft:15,
                               paddingRight:10,
                              
                               }}>
                            <TextInput
                               onChangeText={(value)=>{
                                this.setState({CVV:value})
                            }}
                                placeholder='CVV'
                                keyboardType='number-pad'
                                multiline={true}
                                style={{
                                   
                                }}
                            >
                            </TextInput>
                            <Icon name='lock' size={19} style={{color: user,marginLeft:5 }}></Icon>
                            </View>


                            <View style={{
                               width: '93%',
                               height:height*.07,
                               backgroundColor:'#0f0',
                               paddingLeft: '7%',
                               backgroundColor: textInput,
                               borderColor: border_color,
                               alignItems:'center',
                               borderRadius: 17,
                               borderWidth: 1,
                               alignSelf:'center',
                               marginTop:height*.05,
                               flexDirection:'row',
                               justifyContent:'flex-end',
                               paddingLeft:15,
                               paddingRight:10,
                              
                               }}>
                            <TextInput
                             onChangeText={(value)=>{
                                this.setState({expiry_date:value})
                            }}
                                placeholder='Expiry Date'
                                keyboardType='number-pad'
                                multiline={true}
                                style={{
                                   
                                }}
                            >
                            </TextInput>
                            <Icon name='calendar-week' size={19} style={{color: user,marginLeft:5 }}></Icon>
                            </View>

                        </View>


                        <View style={{ 
                           
                           alignItems:'center',
                          // backgroundColor:'#ddd',
                           justifyContent:'flex-end',
                           height:height*.15,
                           }}>
                               <TouchableOpacity
                                   onPress={() => {
                                   
                                     this.props.navigation.navigate('Summary',{
                                        car_img: this.state.car_img,
                                        car_name: this.state.car_name,
                                        car_price: this.state.car_price,
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
                                       }}>Done</Text>
                               </TouchableOpacity>
                           </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}
