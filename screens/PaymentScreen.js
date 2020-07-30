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
  CheckBox
} from 'react-native';

import BackIcon from 'react-native-vector-icons/Ionicons'

const DevHeight = Dimensions.get('window').height
const DevWidth = Dimensions.get('window').width
const StbrHeight = StatusBar.currentHeight

class PaymentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AddCardVisible: false
    };
  }


  setHeight = () => {
    if (Platform.Version > 25) {
      return DevHeight
    } else return DevHeight - StbrHeight
  }

  setAddCardVisible = (visible) => {
    this.setState({ AddCardVisible: visible });
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <BackIcon name='arrow-back' size={25} color="#404040" />
          </TouchableOpacity>
        </View>


        {/* Payment */}
        <View style={{ paddingBottom: 10, }}>
          <View style={{ flexDirection: 'row', paddingTop: 10, paddingBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
            <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular' }}>Payment</Text>
          </View>

          <View style={{ width: '100%', minHeight: 200, borderRadius: 5, backgroundColor: "#667EEA", justifyContent: 'flex-end', }}>
            <Text style={{ flex: 1.5, marginRight: 10, marginTop: 10, textAlign: 'right', fontSize: 25, color: "#fff", fontFamily: "Poppins-Regular" }}>VISA Card</Text>
            <Text style={{ flex: 1.2, marginLeft: 10, textAlign: 'left', fontSize: 35, color: "#fff", fontFamily: "Poppins-Regular" }}>1000 1000 1000 1000</Text>
            <Text style={{ flex: 0.5, marginLeft: 10, textAlign: 'left', fontSize: 10, color: "#fff", fontFamily: "Poppins-Regular" }}>valid date : 03/23</Text>
            <Text style={{ flex: 1, paddingBottom: 10, marginLeft: 10, textAlign: 'left', fontSize: 20, color: "#fff", fontFamily: "Poppins-Regular" }}>AHMED SALIH AC</Text>
          </View>
        </View>


        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 10, zIndex: 1, alignItems: 'center' }}>
          <TouchableOpacity style={{ height: 44, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 5, borderWidth: 2, borderStyle: 'dotted', borderColor: '#667EEA' }}
            onPress={() => {
              this.setAddCardVisible(true);
            }}
          >
            <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#667EEA' }}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ height: 55, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#667EEA', borderRadius: 5, marginTop: 12 }}
            onPress={() => this.props.navigation.navigate("checkout_screen")}
          >
            <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#fff' }}>Checkout</Text>
          </TouchableOpacity>
        </View>


        {/* Add Card */}
        <Modal animationType={"fade"} transparent={false}
          visible={this.state.AddCardVisible}
          onRequestClose={() => { console.log("Modal has been closed.") }}>

          <View style={{ flex: 1, backgroundColor: "#fff", padding: 15, }}>
            <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
              <TouchableOpacity onPress={() => this.setAddCardVisible(!this.state.AddCardVisible)}>
                <BackIcon name='arrow-back' size={25} color="#404040" />
              </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: 10, }}>
              <View style={{ flexDirection: 'row', marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular' }}>Create Card</Text>
              </View>
              <ScrollView style={{ height: this.setHeight() - 260, }}>

                <View style={{ marginBottom: 10 }}>
                  <Text style={{ color: "#919191" }}>Card Holder Name</Text>
                  <TextInput style={styles.input}
                    autoCompleteType='name'
                    numberOfLines={1}
                    underlineColorAndroid='#979797'
                  />
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ color: "#919191" }}>Card Number</Text>
                  <TextInput style={styles.input}
                    numberOfLines={1}
                    underlineColorAndroid='#979797'
                  />
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ color: "#919191" }}>Valid Date</Text>
                  <TextInput style={styles.input}
                    numberOfLines={1}
                    underlineColorAndroid='#979797'
                  />
                </View>
                <View style={{ marginBottom: 10 }}>
                  <Text style={{ color: "#919191" }}>CVV</Text>
                  <TextInput style={styles.input}
                    numberOfLines={1}
                    underlineColorAndroid='#979797'
                  />
                </View>

              </ScrollView>
            </View>

            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 10, zIndex: 1, alignItems: 'center' }}>
              <TouchableOpacity style={{ height: 55, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#667EEA', borderRadius: 5, marginTop: 12 }}
                onPress={() => { this.setAddCardVisible(!this.state.AddCardVisible) }}
              >
                <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#fff' }}>Add Card</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  input: {
    height: 45,
    borderRadius: 10,
    fontSize: 22,
    color: '#404040',
  },
});

export default PaymentScreen;
