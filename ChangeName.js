
import * as React from 'react'
import {
    Text, StyleSheet, View, ScrollView, Switch, TextInput, Dimensions,
    StatusBar, Image, TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { backgroundColor, border_color2, text, border_color } from '../Tasks/Colors';

const { width, height } = Dimensions.get('window');
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName:  ''

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
                            justifyContent: 'space-between',
                            alignItems:'flex-end',
                            flexDirection:'row',
                            padding:8,
                            paddingLeft:10,
                        }} >
                            <View style={{width:20,height:50,}}>

                            </View>
                            <Text
                                style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color:'#fff',textAlign:'center',
                                }}
                            >Change Name</Text>
                             <TouchableOpacity
                             onPress={()=>{
                                 this.props.navigation.goBack()
                             }}
                                style={{   }}
                            >
                                <Icon name={'chevron-left'} size={22} color='#fff'
                                    style={{  }} />
                            </TouchableOpacity>
                        </View>
                        {/* content */}

                        <View>

                            <View style={{ marginTop: 10, marginBottom: "20%", }}>
                                <Text style={styles.title}>Name</Text>
                                <TextInput 
                                    style={styles.textinput}
                                    value={this.state.userName}
                                    onChangeText={(value) => {
                                        this.setState({ userName: value })
                                    }}
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

                                    }}>save</Text>
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
        fontSize: 18,
        color: text,
         marginRight: 15
    },
    textinput: {

        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 15,
        width: width - 20,
        marginTop: 10,
        backgroundColor: border_color2,
        fontSize: 16,
        borderColor: border_color

    },



});

