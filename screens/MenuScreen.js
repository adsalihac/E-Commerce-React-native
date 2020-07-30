import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class MenuScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.screen}>
                <TouchableOpacity style={styles.button}
                    onPress={() => { this.props.navigation.goBack() }}>
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => { this.props.navigation.navigate('profile_screen') }}>
                    <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => { this.props.navigation.navigate('cart_screen') }}>
                    <Text style={styles.text}>My Cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => { this.props.navigation.navigate('favorite_screen') }}>
                    <Text style={styles.text}>Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => { this.props.navigation.navigate('order_screen') }}>
                    <Text style={styles.text}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPress={() => { this.props.navigation.navigate('main_screen') }}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#696969',
        fontSize: 24,
        fontFamily: 'Poppins-Regular'
    },
    button: {
        paddingBottom: 10
    }
});

export default MenuScreen;
