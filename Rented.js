import * as React from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TextInput, TouchableOpacity, Modal, FlatList, Alert, Dimensions, StatusBar, Rad } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { backgroundColor, chevron_left, header_text, personal, textInput, user, button, next, border_color, border_color2, radio, text, plus } from '../Tasks/Colors'
const { width, height } = Dimensions.get('screen');
//import { Container, Header, Content, ListItem, Radio, Right, Left, Badge } from 'native-base';
//import * as ImagePicker from 'react-native-image-picker';
export default class Rented extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }



    render() {

        return (
            <>

                <View style={{ backgroundColor: backgroundColor, flex: 1 }}>
                    <ScrollView>
                        <StatusBar backgroundColor={backgroundColor} />

                        <View style={{ flex: 0.1, }}>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        this.props.navigation.goBack()
                                    }
                                }

                                style={{
                                    width: '9%',
                                    height: '50%',
                                    // alignSelf: 'center',
                                    // justifyContent: 'center',
                                    marginLeft: '82%',
                                    marginBottom: '10%',
                                    marginTop: '3%'
                                }}>
                                <Icon name='chevron-left' color={chevron_left} size={20} ></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.2, }}>
                            <Image source={require('../img/check-mark.png')}
                                style={{
                                    alignSelf: 'center',
                                    marginTop: '50%'
                                }}
                            ></Image>
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    // marginRight: 26,
                                    color: header_text,
                                    marginBottom: 17,
                                    marginTop: '8%',
                                    textAlign: 'center'
                                }}
                            >Car Has Been Rented Successfully</Text>
                        </View>

                        


                    </ScrollView>
                </View>

            </>
        )
    }
}
