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
  Modal,
} from 'react-native';


import CheckBox from '@react-native-community/checkbox';

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

class CheckOutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CartData: [
        { id: 8, title: 'Halter Dress', total: '$55', image: Image8 },
        { id: 9, title: 'T-Shirt', total: '$07', image: Image9 },
        { id: 5, title: 'Mini Dress', total: '$32', image: Image5 },
        { id: 6, title: 'Shoe', total: '$67', image: Image6 },
        // { id: 1, title: 'Midi Dress', total: '$55', image: Image1 },
        // { id: 2, title: 'Shift Dress', total: '$32', image: Image2 },
        // { id: 3, title: 'Bodycon Dress', total: '$43', image: Image3 },
        // { id: 4, title: 'A-Line Dress', total: '$44', image: Image4 },
        // { id: 10, title: 'Maxi Dress', total: '$65', image: Image10 },
      ],
      CompleteVisible: false
    };
  }

  setHeight = () => {
    if (Platform.Version > 25) {
      return DevHeight
    } else return DevHeight - StbrHeight
  }

  setCompleteVisible = (visible) => {
    this.setState({ CompleteVisible: visible });
  }


  render() {
    return (
      <View style={styles.screen}>
        <View style={{ flexDirection: 'row', marginHorizontal: 15, marginTop: 15, height: 50, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <BackIcon name='arrow-back' size={25} color="#404040" />
          </TouchableOpacity>
        </View>

        {/* CheckOut */}
        <View style={{ paddingBottom: 10, }}>
          <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular' }}>Checkout</Text>
          </View>
          <View style={{ height: this.setHeight() - 220, marginHorizontal: 15 }}>

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
              ListFooterComponent={
                <>
                  <View style={{ flexDirection: 'row', marginHorizontal: 15, marginVertical: 10 }}>
                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'flex-start' }}>
                      <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular' }}>
                        Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016
                  </Text>
                    </View>
                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'flex-end' }}>
                      <CheckBox
                        value={true}
                      />
                    </View>
                  </View>

                  <View style={{ marginHorizontal: 10, borderBottomWidth: 0.5, marginVertical: 10, borderColor: "#434343" }}>
                  </View>

                  <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={{ fontSize: 17, fontFamily: "Poppins-Regular" }}>SubTotal</Text>
                    <Text>$160.00</Text>
                  </View>

                  <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={{ fontSize: 17, fontFamily: "Poppins-Regular" }}>Discount</Text>
                    <Text>5%</Text>
                  </View>

                  <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                    <Text style={{ fontSize: 17, fontFamily: "Poppins-Regular" }}>Shipping</Text>
                    <Text>$10.00</Text>
                  </View>

                  <View style={{ marginHorizontal: 10, borderBottomWidth: 0.5, marginVertical: 10, borderColor: "#434343" }}>
                  </View>

                  <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 15, marginBottom: 10 }}>
                    <Text style={{ fontSize: 17, fontFamily: "Poppins-Regular" }}>Total</Text>
                    <Text>$162.00</Text>
                  </View>
                </>
              }
            />

          </View>
        </View>



        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 10, zIndex: 1, alignItems: 'center' }}>
          <TouchableOpacity style={{ height: 55, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#667EEA', borderRadius: 5, marginTop: 12 }}
            onPress={() => {
              this.setCompleteVisible(true)
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#fff' }}>Buy</Text>
          </TouchableOpacity>
        </View>


        {/* Completed purchase */}
        <Modal animationType={"fade"} transparent={false}
          visible={this.state.CompleteVisible}
          onRequestClose={() => { console.log("Modal has been closed.") }}>

          <View style={{ flex: 1, backgroundColor: "#fff", justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: 200, width: 200, borderRadius: 100, backgroundColor: "#F8F8F8", justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
              <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: "#EEEEEE", justifyContent: 'center', alignItems: 'center' }}>
                <Image
                  style={{ height: "100%", width: "50%", resizeMode: "contain", }}
                  source={require('../assets/images/like.png')}
                />
              </View>
            </View>

            <Text style={{ fontSize: 30, color: "#434343", marginBottom: 15, textAlign: 'center' }}>Confirmation</Text>
            <Text style={{ fontSize: 14, color: "#656565", textAlign: 'center' }}>You have successfully</Text>
            <Text style={{ fontSize: 14, color: "#656565", marginBottom: 15, textAlign: 'center' }}>completed your payment procedure</Text>
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 10, zIndex: 1, alignItems: 'center' }}>
              <TouchableOpacity style={{ height: 55, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#667EEA', borderRadius: 5, marginTop: 12 }}
                onPress={() => { this.props.navigation.navigate("root_screen") }}
              >
                <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#fff' }}>Back to Home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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

export default CheckOutScreen;
