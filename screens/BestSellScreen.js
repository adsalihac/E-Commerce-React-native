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
    Image
} from 'react-native';

import BackIcon from 'react-native-vector-icons/Ionicons'

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

class BestSellScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ImageData: [
                { id: 8, title: 'Halter Dress', price: '$55', image: Image8 },
                { id: 9, title: 'T-Shirt', price: '$07', image: Image9 },
                { id: 4, title: 'A-Line Dress', price: '$44', image: Image4 },
                { id: 10, title: 'Maxi Dress', price: '$65', image: Image10 },
                { id: 5, title: 'Mini Dress', price: '$32', image: Image5 },
                { id: 3, title: 'Bodycon Dress', price: '$43', image: Image3 },
                { id: 6, title: 'Shoe', price: '$67', image: Image6 },
                { id: 1, title: 'Midi Dress', price: '$55', image: Image1 },
                { id: 2, title: 'Shift Dress', price: '$32', image: Image2 },
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
                <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 15, height: 50, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <BackIcon name='arrow-back' size={25} color="#404040" />
                    </TouchableOpacity>
                </View>
                {/* Best Sell */}
                <View style={{ paddingBottom: 10, }}>
                    <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 30, color: "#323232", fontFamily: 'Poppins-Medium', }}>Best Sell</Text>
                    </View>
                    <View style={{ height: this.setHeight() - 155, paddingHorizontal: 10 }}>
                        <FlatList
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            data={this.state.ImageData}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <View style={{ height: 240, width: DevWidth / 2, paddingLeft: 5, paddingRight: 5 }}>
                                    <TouchableOpacity style={{ width: DevWidth / 2.2, borderRadius: 5, }} onPress={() => { this.props.navigation.navigate('itemdetails_screen') }}>
                                        <Image
                                            style={{ width: "100%", height: '75%', borderRadius: 2, }}
                                            source={item.image}
                                        />
                                        <View style={{ height: '25%', justifyContent: 'center', paddingLeft: 5 }}>
                                            <Text style={{ color: "#2A2A2A", fontSize: 16, fontFamily: "Poppins-Regular", paddingBottom: 3 }}>{item.price}</Text>
                                            <Text style={{ color: "#2A2A2A", fontSize: 16, fontFamily: "Poppins-Regular" }}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            }
                        // keyExtractor={item => item.id}
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

export default BestSellScreen;
