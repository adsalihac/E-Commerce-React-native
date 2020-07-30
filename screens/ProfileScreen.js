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
    ScrollView,
    KeyboardAvoidingView
} from 'react-native';

import BackIcon from 'react-native-vector-icons/Ionicons'
import SaveIcon from 'react-native-vector-icons/AntDesign'

import Input from '../components/InputBox';

const DevHeight = Dimensions.get('window').height
const DevWidth = Dimensions.get('window').width
const StbrHeight = StatusBar.currentHeight

class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    setHeight = () => {
        if (Platform.Version > 25) {
            return DevHeight
        } else return DevHeight - StbrHeight
    }

    render() {
        return (
            <View style={styles.screen}>
                <View style={{ flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("root_screen")}>
                        <BackIcon name='arrow-back' size={25} color="#404040" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.warn('save')}>
                        <SaveIcon name='save' size={25} color="#404040" />
                    </TouchableOpacity>
                </View>
                {/* Profile list */}
                <View style={{ paddingBottom: 10, }}>
                    <View style={{ flexDirection: 'row', marginVertical: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 30, fontFamily: 'Poppins-Regular' }}>Profile</Text>
                    </View>
                    
                    <ScrollView style={{ height: this.setHeight() - 145, }}>
                        <Input
                            InputName={"Name"}
                            Type={"name"}
                        />

                        <Input
                            InputName={"Address"}
                            Type={"street-address"}
                        />

                        <Input
                            InputName={"City"}

                        />

                        <Input
                            InputName={"Gender"}

                        />

                        <Input
                            InputName={"Email"}
                            Type={"email"}
                        />

                        <Input
                            InputName={"Phone Number"}
                            Type={"tel"}
                        />

                    </ScrollView>
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
    input: {
        height: 45,
        borderRadius: 10,
        fontSize: 22,
        color: '#404040',
    },
});

export default ProfileScreen;
