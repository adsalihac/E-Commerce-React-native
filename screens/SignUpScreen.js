import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';


import BackIcon from 'react-native-vector-icons/Ionicons'
import EyeIcon from 'react-native-vector-icons/Octicons'


class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passhide: true,
        };
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('main_screen')}>
                        <BackIcon name='arrow-back' size={25} color="#404040" />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontFamily: 'Poppins-Medium', fontSize: 30, marginVertical: 20 }}>Signup</Text>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: "#A6A6A6" }}>Name</Text>
                    <TextInput style={styles.input}
                        autoCompleteType='name'
                        numberOfLines={1}
                        underlineColorAndroid='#A6A6A6'
                    />
                </View>

                <View style={{ marginBottom: 10 }}>
                    <Text style={{ color: "#A6A6A6" }}>Email</Text>
                    <TextInput style={styles.input}
                        autoCompleteType='email'
                        numberOfLines={1}
                        underlineColorAndroid='#A6A6A6'
                    />
                </View>

                <View style={{ marginBottom: 20 }}>
                    <Text style={{ color: "#A6A6A6" }}>Password</Text>
                    <View>
                        <TextInput style={styles.input}
                            secureTextEntry={this.state.passhide}
                            autoCompleteType='password'
                            maxLength={20}
                            numberOfLines={1}
                            underlineColorAndroid='#A6A6A6'
                        />
                        <TouchableOpacity style={styles.btnEye}
                            onPress={() => { this.setState({ passhide: !this.state.passhide }) }}
                        >
                            <EyeIcon name={this.state.passhide ? 'eye' : 'eye-closed'} size={20} color='#C6CBD4' />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btnBlue}
                        onPress={() => { this.props.navigation.navigate('home_screen') }}
                    >
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: "Poppins-Regular" }}>Sign Up</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', }}>
                        <Text style={{ color: "#A6A6A6", marginRight: 10, fontSize: 14, fontFamily: "Poppins-Regular" }}>Already have an account ?
                        </Text>
                        <TouchableOpacity style={styles.btnWhite}
                            onPress={() => { this.props.navigation.navigate('signin_screen') }}
                        >
                            <Text style={{ fontSize: 14, fontFamily: "Poppins-Regular" }}>Sign in</Text>
                        </TouchableOpacity>
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
        padding: 15
    },
    btnEye: {
        position: 'absolute',
        top: 10,
        right: 15
    },

    input: {
        height: 45,
        borderRadius: 10,
        fontSize: 22,
        color: '#404040',
    },
    btnBlue: {
        width: 315,
        height: 48,
        borderRadius: 5,
        backgroundColor: '#667EEA',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 5
    },
});

export default SignUpScreen;
