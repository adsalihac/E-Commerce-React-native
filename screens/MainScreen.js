import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    BackHandler,
    Alert
} from 'react-native';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
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


    render() {
        return (
            <View style={styles.screen}>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: "center", color: "#707070" }}>Welcome to</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 18, textAlign: "center", color: "#707070" }}>Ecommerce App</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        style={{ height: "100%", width: "50%", resizeMode: "contain" }}
                        source={require('../assets/images/girls.png')}
                    />
                </View>
                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity style={styles.btnBlue}
                        onPress={() => { this.props.navigation.navigate('signin_screen') }}>
                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins-Regular', }}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnWhite}
                        onPress={() => { this.props.navigation.navigate('signup_screen') }}>
                        <Text style={{ color: '#454242', fontSize: 16, fontFamily: 'Poppins-Regular', }}>Signup</Text>
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
        padding: 15
    },
    btnBlue: {
        width: 245,
        height: 49,
        borderRadius: 10,
        backgroundColor: '#667EEA',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    btnWhite: {
        width: 245,
        height: 49,
        borderRadius: 10,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default MainScreen;
