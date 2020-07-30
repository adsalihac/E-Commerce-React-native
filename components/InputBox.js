import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
} from 'react-native';

class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { InputName, Type } = this.props
        return (
            <View style={{ marginBottom: 10 }}>
                <Text style={{ color: "#919191", fontSize: 16, fontFamily: 'Poppins-Regular' }}>{InputName}</Text>
                <TextInput style={styles.input}
                    autoCompleteType={Type}
                    numberOfLines={1}
                    underlineColorAndroid='#979797'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    input: {
        height: 45,
        borderRadius: 10,
        fontSize: 22,
        color: '#404040',
    },
});

export default InputBox;
