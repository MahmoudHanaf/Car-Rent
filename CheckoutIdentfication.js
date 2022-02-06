import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, FlatList, Alert, Dimensions, StatusBar, Rad } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, next, border_color, border_color2, radio, text, plus } from './Colors'
const { width, height } = Dimensions.get('window');
import { Container, Header, Content, ListItem, Radio, Right, Left, Badge } from 'native-base';
import { Value } from 'react-native-reanimated';
import * as ImagePicker from 'react-native-image-picker';
export default class CheckoutIdentfication extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ['National ID', 'Passport'],
            checked: 0,
            img: '',
            img2: '',
            name:'',
            phone:'',
            address:'',
            email:'',
            id:'',
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
              car_name: car_name,
              car_img: car_img,
              car_price: car_price,
              num_stars: num_stars,
              firstDate:firstDate,
              secondDate:secondDate
          })
      }

    select_first_photo() {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary({ options, includeBase64: true }, (res) => {
            // console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {

                this.setState({
                    img: res.uri
                });
                console.log(res)
            }
        });
    }

    select_first_photo2() {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary({ options, includeBase64: true }, (res) => {
            // console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {

                this.setState({
                    img2: res.uri
                });
                // console.log(res)
            }
        });
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

                        <View style={{ flex: 0.3, }}>

                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    marginTop: 10,
                                    marginRight: 15,
                                    color: personal,
                                    marginBottom: 40
                                }} >Identification --</Text>
                            {this.state.data.map((data, key) => (
                                <>

                                    {this.state.checked == key ?
                                        (<>
                                            <TouchableOpacity
                                                key={key}
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginLeft: 50,
                                                }}
                                            >
                                                <Image source={require('../img/button.png')}
                                                    style={{
                                                        width: 20,
                                                        height: 20,
                                                        borderRadius: 10,
                                                        marginLeft: '81%'
                                                    }}
                                                ></Image>

                                            </TouchableOpacity>
                                            <Text style={{
                                                marginRight: 70,
                                                marginTop: -25,
                                                marginBottom: 20,
                                                fontSize: 20,
                                                fontWeight: 'bold',
                                                color: radio
                                            }}>{data}</Text>
                                        </>) :
                                        (
                                            <>
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        this.setState({ checked: key })
                                                    }}
                                                    style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        marginLeft: 50
                                                    }}
                                                >
                                                    <Image source={require('../img/rec.png')}
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                            borderRadius: 10,
                                                            marginLeft: '81%'
                                                        }}
                                                    ></Image>
                                                </TouchableOpacity>
                                                <Text style={{
                                                    marginRight: 70,
                                                    marginTop: -25,
                                                    marginBottom: 20,
                                                    fontSize: 20,
                                                    fontWeight: 'bold',
                                                    color: radio
                                                }}>{data}</Text>
                                            </>
                                        )
                                    }

                                </>
                            ))}

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
                                this.setState({id:value})
                            }}
                                placeholder='National ID Number'
                                keyboardType='number-pad'
                                multiline={true}
                                style={{
                                   
                                }}
                            >
                            </TextInput>
                            <Icon name='id-card' size={19} style={{color: user,marginLeft:5 }}></Icon>
                            </View>

                        <View style={{ marginTop: '10%',height:height*.25 }}>
                            <Text
                                style={{
                                    marginTop: 20,
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 19,
                                    color: text
                                }}
                            >Uplode Your ID Photo</Text>
                            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
                                <TouchableOpacity
                                    // key={index}
                                    onPress={() => {
                                        this.select_first_photo()
                                        //alert(this.state.img)
                                    }}
                                // style={{ height: width * 0.52 }}
                                >
                                    <View
                                        style={{
                                            width: width * 0.35,
                                            height: width * 0.25,
                                            borderRadius: 20,
                                            // backgroundColor: '#f0f',
                                            alignSelf: 'center',
                                            marginTop: 5,
                                            borderColor: (this.state.img == '') ? border_color2 : null,
                                            borderWidth: 1.5,
                                        }}
                                    >
                                        {this.state.img == '' ?
                                            (<Icon name='plus' color={plus} style={{ alignSelf: 'center', marginTop: width * 0.08 }} size={25}></Icon>)
                                            :
                                            (<Image source={{ uri: this.state.img }}
                                                style={{
                                                    width: width * 0.35,
                                                    height: width * 0.25,
                                                    borderRadius: 20,
                                                }}
                                                resizeMode='cover'
                                            ></Image>
                                            )
                                        }
                                    </View>

                                </TouchableOpacity>
                                <TouchableOpacity
                                    // key={index}
                                    onPress={() => {
                                        this.select_first_photo2()
                                    }}
                                // style={{ height: width * 0.52 }}
                                >
                                    <View
                                        style={{
                                            width: width * 0.35,
                                            height: width * 0.25,
                                            borderRadius: 20,
                                            // backgroundColor: '#f0f',
                                            alignSelf: 'center',
                                            marginTop: 5,
                                            borderColor: (this.state.img2 == '') ? border_color2 : null,
                                            borderWidth: 1.5,
                                            marginLeft: 50
                                        }}
                                    >
                                        {this.state.img2 == '' ?
                                            (<Icon name='plus' color={plus} style={{ alignSelf: 'center', marginTop: width * 0.08 }} size={25}></Icon>)
                                            :
                                            (<Image source={{ uri: this.state.img2 }}
                                                style={{
                                                    width: width * 0.9,
                                                    height: width * 0.45,
                                                    borderRadius: 35,
                                                }}
                                                resizeMode='cover'
                                            ></Image>
                                            )
                                        }
                                    </View>

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{ 
                           
                        alignItems:'center',
                        //backgroundColor:'#ddd',
                        justifyContent:'flex-end',
                        height:height*.15,
                        }}>
                            <TouchableOpacity
                                onPress={() => {
                                  
                                    this.props.navigation.navigate('CheckoutLicense',{
                                        name:this.state.name,
                                        address:this.state.address,
                                        phone:this.state.phone,
                                        email:this.state.email,
                                        id:this.state.id,
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
                                    }}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

            </>
        )
    }
}
