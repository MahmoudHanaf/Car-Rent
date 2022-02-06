
import * as React from 'react'
import {
    Text, StyleSheet, View, ScrollView, Switch, TextInput, Dimensions,
    StatusBar, Image, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor, text, border_color2, border_color } from '../Tasks/Colors';

const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: ''

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
                            justifyContent: "space-around",
                        }} >

                            <TouchableOpacity
                                onPress={() => { this.props.navigation.goBack() }
                                }
                                style={{ width: '10%', margin: '5%' }}
                            >
                                <Icon name={'chevron-left'} size={20} color={text}
                                    style={{ alignSelf: 'flex-start' }} />
                            </TouchableOpacity>
                            <Text
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: text, alignSelf: 'center', marginTop: '-20%'
                                }}
                            >Change email address</Text>
                        </View>

                        {/* content */}

                        <View>


                            <View style={{ marginTop: 10, marginBottom: '20%' }}>
                                <Text style={styles.title}>Edit email</Text>
                                <TextInput

                                    value={this.state.emailAddress}
                                    style={styles.textinput}
                                />
                            </View>

                            <TouchableOpacity
                                style={{
                                    width: width - 20,
                                    height: height * 0.08,
                                    backgroundColor: border_color,
                                    alignSelf: 'center',
                                    borderRadius: 15,
                                    marginBottom: 5,
                                    justifyContent: 'center'
                                }}
                            >
                                <Text
                                    style={{
                                        textAlign: 'center',
                                        fontSize: 25,
                                        fontWeight: 'bold',
                                        color: text,

                                    }}>next</Text>
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
        fontSize: 15, color: '#fff', marginLeft: 10
    },
    textinput: {

        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 15,
        width: width - 20,
        marginTop: 10,
        backgroundColor: '#B0B0B0',
        fontSize: 16,
        borderColor: "#FFD100"

    }

});

