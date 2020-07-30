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

class OrderScreen extends Component {
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
                <View style={{ flexDirection: 'row', height: 50, marginHorizontal: 15, marginTop: 15, alignItems: 'center', paddingLeft: 10 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <BackIcon name='arrow-back' size={25} color="#404040" />
                    </TouchableOpacity>
                </View>
                {/* Order list */}
                <View style={{ paddingBottom: 10, }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 30, marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular' }}>My Orders</Text>
                    </View>
                    <View style={{ height: this.setHeight() - 155, marginHorizontal: 15 }}>
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
                                    <View key={item.key} style={{ flex: 1, justifyContent: 'center', }}>
                                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#434343' }}>{item.title}</Text>
                                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#374ABE' }}> {item.total}</Text>
                                        <TouchableOpacity style={{ height: 39, width: 114, alignItems: 'center', justifyContent: 'center', borderRadius: 5, backgroundColor: '#667EEA', }}>
                                            <Text style={{ fontSize: 16, fontFamily: 'Poppins-SemiBold', color: "#fff" }}>Order Again</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",

    },
});

export default OrderScreen;
