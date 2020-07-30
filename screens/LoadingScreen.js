import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class LoadingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('main_screen')
        }, 2000)
    }

    render() {
        return (
            <View style={styles.screen}>
                {/* <Image
                    style={{ height: "100%", width: "50%", resizeMode: "contain" }}
                    source={require('../assets/images/girls.png')}
                /> */}
                <Text style={{ fontSize: 22, fontFamily: 'Poppins-Black' }}>Ecommerce App</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoadingScreen;
