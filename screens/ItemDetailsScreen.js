import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, StatusBar, ScrollView } from 'react-native';

import BackIcon from 'react-native-vector-icons/Ionicons'
import FavIcon from 'react-native-vector-icons/MaterialIcons';

import { SliderBox } from "react-native-image-slider-box";

const DevHeight = Dimensions.get('window').height
const DevWidth = Dimensions.get('window').width
const StbrHeight = StatusBar.currentHeight

class ItemDetailsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../assets/images/image1.jpg'),
                require('../assets/images/image2.jpg'),
                require('../assets/images/image3.jpg'),          // Local image
            ],
            favIcon: true
        };
    }
    Screen
    setHeight = () => {
        if (Platform.Version > 25) {
            return DevHeight
        } else return DevHeight - StbrHeight
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingTop: 15, height: 50, alignItems: 'center', justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <BackIcon name='arrow-back' size={25} color="#404040" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.setState({ favIcon: !this.state.favIcon }) }}>
                        <FavIcon name={this.state.favIcon ? "favorite-border" : "favorite"} size={25} color="#FA594F" />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}>

                    {/* Slider */}
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <SliderBox
                            // ImageComponent={FastImage}, 
                            images={this.state.images}
                            sliderBoxHeight={DevHeight / 1.7}
                            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                            dotColor="#667EEA"
                            inactiveDotColor="#90A4AE"
                            paginationBoxVerticalPadding={20}
                            // autoplay
                            circleLoop
                            resizeMethod={'resize'}
                            resizeMode={'cover'}
                            paginationBoxStyle={{
                                position: "absolute",
                                bottom: 0,
                                padding: 0,
                                alignItems: "center",
                                alignSelf: "center",
                                justifyContent: "center",
                                paddingVertical: 10
                            }}
                            dotStyle={{
                                width: 10,
                                height: 10,
                                borderRadius: 5,
                                marginHorizontal: 0,
                                padding: 0,
                                margin: 0,
                                backgroundColor: "rgba(128, 128, 128, 0.92)"
                            }}
                            ImageComponentStyle={{ borderRadius: 4, width: '93%', marginTop: 20 }}
                            imageLoadingColor="#667EEA"
                        />
                    </View>

                    <View style={{ paddingHorizontal: 15, paddingTop: 20, paddingBottom: 60 }}>
                        <Text style={{ fontSize: 25, fontFamily: 'Poppins-Regular' }}>Midi Dress</Text>
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-Regular', paddingVertical: 5, color: '#667EEA' }}>$65</Text>
                        <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', paddingVertical: 5, }}>Description</Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', paddingVertical: 5, color: '#656565' }}>
                            Nisi do aliquip dolore ut sunt cillum non officia irure ullamco esse anim. Adipisicing sunt velit laborum magna. Ipsum adipisicing quis duis tempor eu esse eiusmod. Veniam deserunt labore sunt amet nostrud aliqua duis excepteur magna labore ad magna. Dolor sit esse veniam consequat elit fugiat exercitation exercitation voluptate adipisicing in. Velit irure cillum esse laboris voluptate aliquip non dolore.
                        </Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', paddingVertical: 5, color: '#656565' }}>
                            Nisi do aliquip dolore ut sunt cillum non officia irure ullamco esse anim. Adipisicing sunt velit laborum magna. Ipsum adipisicing quis duis tempor eu esse eiusmod. Veniam deserunt labore sunt amet nostrud aliqua duis excepteur magna labore ad magna. Dolor sit esse veniam consequat elit fugiat exercitation exercitation voluptate adipisicing in. Velit irure cillum esse laboris voluptate aliquip non dolore.
                        </Text>
                        <Text style={{ fontSize: 14, fontFamily: 'Poppins-Regular', paddingVertical: 5, color: '#656565' }}>
                            Nisi do aliquip dolore ut sunt cillum non officia irure ullamco esse anim. Adipisicing sunt velit laborum magna. Ipsum adipisicing quis duis tempor eu esse eiusmod. Veniam deserunt labore sunt amet nostrud aliqua duis excepteur magna labore ad magna. Dolor sit esse veniam consequat elit fugiat exercitation exercitation voluptate adipisicing in. Velit irure cillum esse laboris voluptate aliquip non dolore.
                        </Text>
                    </View>

                </ScrollView>

                <View style={{ flexDirection: 'row', position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 1 }}>
                    <TouchableOpacity style={{ height: 55, width: DevWidth / 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#E1E1E1' }}
                        onPress={() => console.warn("add to cart")}
                    >
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#000' }}>ADD TO CART</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 55, width: DevWidth / 2, justifyContent: 'center', alignItems: 'center', backgroundColor: '#667EEA' }}
                        onPress={() => this.props.navigation.navigate("cart_screen")}
                    >
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#fff' }}>BUY NOW</Text>
                    </TouchableOpacity>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",

    },

});

export default ItemDetailsScreen;
