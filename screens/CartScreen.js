import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Platform,
    Dimensions,
    StatusBar,
    FlatList,
    ScrollView,
    Image
} from 'react-native';


import BackIcon from 'react-native-vector-icons/Ionicons'
import CloseIcon from 'react-native-vector-icons/EvilIcons';

const DevHeight = Dimensions.get('window').height
const DevWidth = Dimensions.get('window').width
const StbrHeight = StatusBar.currentHeight

import Image1 from '../assets/images/image1.jpg'
import Image2 from '../assets/images/image2.jpg'
import Image3 from '../assets/images/image3.jpg'
import Image4 from '../assets/images/image4.jpg'
import Image5 from '../assets/images/image5.jpg'
import Image6 from '../assets/images/image6.jpg'
import Image7 from '../assets/images/image7.jpg'
import Image8 from '../assets/images/image8.jpg'
import Image9 from '../assets/images/image9.jpg'
import Image10 from '../assets/images/image10.jpg'

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CartData: [
                { id: 8, title: 'Halter Dress', total: '$55', image: Image8 },
                { id: 9, title: 'T-Shirt', total: '$07', image: Image9 },
                { id: 5, title: 'Mini Dress', total: '$32', image: Image5 },
                { id: 6, title: 'Shoe', total: '$67', image: Image6 },
                { id: 1, title: 'Midi Dress', total: '$55', image: Image1 },
                { id: 2, title: 'Shift Dress', total: '$32', image: Image2 },
                { id: 3, title: 'Bodycon Dress', total: '$43', image: Image3 },
                { id: 4, title: 'A-Line Dress', total: '$44', image: Image4 },
                { id: 10, title: 'Maxi Dress', total: '$65', image: Image10 },
            ],
        };
    }

    setHeight = () => {
        if (Platform.Version > 25) {
            return DevHeight
        } else return DevHeight - StbrHeight
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <BackIcon name='arrow-back' size={25} color="#404040" />
                    </TouchableOpacity>
                </View>
                {/* Cartlist */}
                <View style={{ paddingBottom: 10, }}>
                    <View style={{ flexDirection: 'row', marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular', color: "#323232" }}>Cart</Text>
                    </View>
                    <View style={{ height: this.setHeight() - 220, }}>
                        <FlatList
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            data={this.state.CartData}
                            renderItem={({ item }) =>
                                <View style={{ flex: 1, flexDirection: 'row', height: 138, width: '95%', margin: 10, elevation: 1, borderRadius: 1 }}>
                                    <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                            style={{ width: '75%', height: '75%', borderRadius: 2, }}
                                            source={item.image}
                                        />
                                    </View>
                                    <View style={{ flex: 1, justifyContent: 'center', }}>
                                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#434343' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#374ABE' }}> {item.total}</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', height: 39, width: 114, backgroundColor: '#F6F6F6', }}>
                                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular' }}>-</Text>
                                            </TouchableOpacity>
                                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', }}>1</Text>
                                            </View>
                                            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular' }}>+</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.2, marginTop: 10 }}>
                                        <TouchableOpacity onPress={() => { console.warn('remove item from cart') }}>
                                            <CloseIcon name='close' size={30} color="#A6A6A6" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>

                <View style={{
                    position: 'absolute', left: 0, right: 0, bottom: 10, zIndex: 1, alignItems: 'center'
                }}>
                    <TouchableOpacity style={{ height: 55, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#667EEA', borderRadius: 5 }}
                        onPress={() => this.props.navigation.navigate("address_screen")}
                    >
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#fff' }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 15,
    },
});
export default CartScreen;
