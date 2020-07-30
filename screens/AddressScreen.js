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

const DevHeight = Dimensions.get('window').height
const DevWidth = Dimensions.get('window').width
const StbrHeight = StatusBar.currentHeight

class AddressScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { address: 'Unit 143 Edgar Buildings George Street Bath England BA1 2FJ', selected: true },
                { address: 'Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016', selected: false },
                { address: 'C-202, Bonanza Indl Estate, Ashok Nagar, Kandivli(e)', selected: false },
            ],
            AddAddressVisible: false
        };
    }

    setHeight = () => {
        if (Platform.Version > 25) {
            return DevHeight
        } else return DevHeight - StbrHeight
    }

    setAddAddressVisible = (visible) => {
        this.setState({ AddAddressVisible: visible });
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <BackIcon name='arrow-back' size={25} color="#404040" />
                    </TouchableOpacity>
                </View>
                {/* Address */}
                <View style={{ paddingBottom: 10, }}>
                    <View style={{ flexDirection: 'row', marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular' }}>Address</Text>
                    </View>
                    <View style={{ height: this.setHeight() - 260, }}>
                        <FlatList
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            data={this.state.data}
                            renderItem={({ item }) =>
                                <View style={{ flex: 1, flexDirection: 'row', minHeight: 60, width: '95%', margin: 5, }}>
                                    <View style={{ flex: 0.8, width: '80%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 15, fontFamily: 'Poppins-Regular' }}>{item.address}</Text>
                                    </View>
                                    <View style={styles.checkboxContainer}>
                                        <CheckBox
                                            value={item.selected}
                                        />
                                    </View>
                                </View>
                            }
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </View>

                <View style={{ position: 'absolute', left: 0, right: 0, bottom: 10, zIndex: 1, alignItems: 'center' }}>
                    <TouchableOpacity style={{ height: 44, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', borderRadius: 5, borderWidth: 2, borderStyle: 'dotted', borderColor: '#667EEA' }}
                        onPress={() => {
                            this.setAddAddressVisible(true);
                        }}
                    >
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#667EEA' }}>Add Address</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 55, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#667EEA', borderRadius: 5, marginTop: 12 }}
                        onPress={() => this.props.navigation.navigate("payment_screen")}
                    >
                        <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#fff' }}>Continue To Payment</Text>
                    </TouchableOpacity>
                </View>

                {/* Add address */}
                <Modal animationType={"fade"} transparent={false}
                    visible={this.state.AddAddressVisible}
                    onRequestClose={() => { console.log("Modal has been closed.") }}>

                    <View style={{ flex: 1, backgroundColor: "#fff", padding: 15, }}>
                        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => this.setAddAddressVisible(!this.state.AddAddressVisible)}>
                                <BackIcon name='arrow-back' size={25} color="#404040" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ paddingBottom: 10, }}>
                            <View style={{ flexDirection: 'row', marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular' }}>Create Address</Text>
                            </View>
                            <ScrollView style={{ height: this.setHeight() - 260, }}>
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: "#919191" }}>Name</Text>
                                    <TextInput style={styles.input}
                                        autoCompleteType='name'
                                        numberOfLines={1}
                                        underlineColorAndroid='#979797'
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: "#919191" }}>Address</Text>
                                    <TextInput style={styles.input}
                                        autoCompleteType='street-address'
                                        numberOfLines={1}
                                        underlineColorAndroid='#979797'
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: "#919191" }}>City</Text>
                                    <TextInput style={styles.input}
                                        // autoCompleteType='city'
                                        numberOfLines={1}
                                        underlineColorAndroid='#979797'
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: "#919191" }}>Postal Code</Text>
                                    <TextInput style={styles.input}
                                        autoCompleteType='postal-code'
                                        numberOfLines={1}
                                        underlineColorAndroid='#979797'
                                    />
                                </View>
                                <View style={{ marginBottom: 10 }}>
                                    <Text style={{ color: "#919191" }}>Phone Number</Text>
                                    <TextInput style={styles.input}
                                        autoCompleteType='cc-number'
                                        numberOfLines={1}
                                        underlineColorAndroid='#979797'
                                    />
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 10, zIndex: 1, alignItems: 'center' }}>
                            <TouchableOpacity style={{ height: 55, width: '90%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#667EEA', borderRadius: 5, marginTop: 12 }}
                                onPress={() => { this.setAddAddressVisible(!this.state.AddAddressVisible) }}
                            >
                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#fff' }}>Add Address</Text>
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
        padding: 15,
    },
    input: {
        height: 45,
        borderRadius: 10,
        fontSize: 22,
        color: '#404040',
    },
    checkboxContainer: {
        flex: 0.2,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkbox: {
        alignSelf: "center",
    },
});


export default AddressScreen;
