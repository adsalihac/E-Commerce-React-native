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
  Image,
  BackHandler,
  Alert,
  Modal
} from 'react-native';

import NavIcon from 'react-native-vector-icons/EvilIcons';
import FilterIcon from 'react-native-vector-icons/AntDesign';
import SearchIcon from 'react-native-vector-icons/FontAwesome';

import { SliderBox } from "react-native-image-slider-box";

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

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        // "https://source.unsplash.com/1024x768/?nature",
        // "https://source.unsplash.com/1024x768/?water",
        // "https://source.unsplash.com/1024x768/?girl",
        // "https://source.unsplash.com/1024x768/?tree", // Network image
        require('../assets/images/sale1.jpg'),
        require('../assets/images/sale2.jpg'),
        require('../assets/images/sale3.jpg'),
        require('../assets/images/sale4.jpg'),          // Local image
      ],
      data: [
        { category: 'Women' },
        { category: 'Kids' },
        { category: 'Man' },
        { category: 'Laptops' },
        { category: 'Mobiles' }],
      ImageData1: [
        { id: 1, title: 'Midi Dress', price: '$55', image: Image1 },
        { id: 2, title: 'Shift Dress', price: '$32', image: Image2 },
        { id: 3, title: 'Bodycon Dress', price: '$43', image: Image3 },
        { id: 4, title: 'A-Line Dress', price: '$44', image: Image4 },
        { id: 5, title: 'Mini Dress', price: '$32', image: Image5 },
      ],
      ImageData2: [
        { id: 6, title: 'Shoe', price: '$67', image: Image6 },
        { id: 7, title: 'Wrap Dress', price: '$57', image: Image7 },
        { id: 8, title: 'Halter Dress', price: '$55', image: Image8 },
        { id: 9, title: 'T-Shirt', price: '$07', image: Image9 },
        { id: 10, title: 'Maxi Dress', price: '$65', image: Image10 },
      ],
    };
  }


  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    Alert.alert(
      'Ecommerce App',
      'Do you want to exit ?', [{
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      }, {
        text: 'OK',
        onPress: () => BackHandler.exitApp()
      },], {
      cancelable: false
    }
    )
    return true;
  }


  setHeight = () => {
    if (Platform.Version > 25) {
      return DevHeight
    } else return DevHeight - StbrHeight
  }




  render() {
    return (
      <View style={styles.screen}>
        <View style={{ flexDirection: 'row', marginHorizontal: 15, height: 50, alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('menu_screen')
          }}>
            <NavIcon name='navicon' size={30} color="#404040" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <FilterIcon name='filter' size={25} color="#707070" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}>

          {/* Search Product */}
          <View style={{ height: 52, flexDirection: 'row', marginTop: 10, marginHorizontal: 15, backgroundColor: "#fff", elevation: 3, borderRadius: 5, alignItems: 'center' }}>
            <SearchIcon style={{ flex: 0.1, marginHorizontal: 12 }} name='search' size={20} color="#707070" />
            <TextInput style={styles.input}
              placeholder="Search Your Product"
              placeholderTextColor="#707070"
              maxLength={10}
              numberOfLines={1}
              underlineColorAndroid='transparent'
            />
          </View>

          {/* Slider */}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <SliderBox
              // ImageComponent={FastImage}, 
              images={this.state.images}
              sliderBoxHeight={180}
              onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
              dotColor="#667EEA"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              autoplay
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

          {/* CATEGORY */}
          <View>
            <View style={{ paddingVertical: 20, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: "#434343", fontSize: 22, fontFamily: "Poppins-Regular" }}>Categories</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('category_screen') }}>
                <Text style={{ color: '#656565', fontSize: 14, fontFamily: "Poppins-Medium" }}>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 5 }}
              showsHorizontalScrollIndicator={false}
              data={this.state.data}
              renderItem={({ item }) =>

                <View style={{ height: 50, borderRadius: 1, elevation: 1, marginHorizontal: 3, justifyContent: 'center', alignItems: 'center', }}>
                  <TouchableOpacity onPress={() => { this.props.navigation.navigate('categorylist_screen') }}>
                    <Text style={{ fontSize: 14, fontFamily: "Poppins-SemiBold", color: "#000", paddingHorizontal: 40 }}>{item.category}</Text>
                  </TouchableOpacity>
                </View>

              }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          {/* Featured */}
          <View style={{ paddingBottom: 10 }}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: "#434343", fontSize: 22, fontFamily: "Poppins-Regular" }}>Featured</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('featured_screen') }}>
                <Text style={{ color: '#656565', fontSize: 14, fontFamily: "Poppins-Medium" }}>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              contentContainerStyle={{ paddingHorizontal: 10 }}
              showsHorizontalScrollIndicator={false}
              data={this.state.ImageData1}
              renderItem={({ item }) =>
                <View style={{ height: 240, width: DevWidth / 3, }}>
                  <TouchableOpacity style={{ marginHorizontal: 5, borderRadius: 5 }} onPress={() => { this.props.navigation.navigate('itemdetails_screen') }}>
                    <Image
                      style={{ width: '100%', height: '70%', borderRadius: 2, }}
                      source={item.image}
                    />
                    <View style={{ height: '30%', justifyContent: 'center', paddingLeft: 5 }}>
                      <Text style={{ color: "#2A2A2A", fontSize: 16, fontFamily: "Poppins-Regular", paddingBottom: 3 }}>{item.price}</Text>
                      <Text style={{ color: "#2A2A2A", fontSize: 16, fontFamily: "Poppins-Regular" }}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          {/* BEST SELL */}
          <View style={{ paddingBottom: 10 }}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text style={{ color: "#434343", fontSize: 22, fontFamily: "Poppins-Regular" }}>Best Sell</Text>
              <TouchableOpacity onPress={() => { this.props.navigation.navigate('bestsell_screen') }}>
                <Text style={{ color: '#656565', fontSize: 14, fontFamily: "Poppins-Medium" }}>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              horizontal
              contentContainerStyle={{ paddingHorizontal: 10 }}
              showsHorizontalScrollIndicator={false}
              data={this.state.ImageData2}
              renderItem={({ item }) =>
                <View style={{ height: 240, width: DevWidth / 3, }}>
                  <TouchableOpacity style={{ marginHorizontal: 5, borderRadius: 5 }} onPress={() => { this.props.navigation.navigate('itemdetails_screen') }}>
                    <Image
                      style={{ width: '100%', height: '70%', borderRadius: 2, }}
                      source={item.image}
                    />
                    <View style={{ height: '30%', justifyContent: 'center', paddingLeft: 5 }}>
                      <Text style={{ color: "#2A2A2A", fontSize: 16, fontFamily: "Poppins-Regular", paddingBottom: 3 }}>{item.price}</Text>
                      <Text style={{ color: "#2A2A2A", fontSize: 16, fontFamily: "Poppins-Regular" }}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              }
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  input: {
    flex: 0.9,
    height: 40,
    fontSize: 16,
    color: '#818181',
  },
});

export default HomeScreen;
