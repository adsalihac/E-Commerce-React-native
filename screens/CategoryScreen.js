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
    Image
} from 'react-native';

import BackIcon from 'react-native-vector-icons/Ionicons'

const DevHeight = Dimensions.get('window').height
const DevWidth = Dimensions.get('window').width
const StbrHeight = StatusBar.currentHeight


class CategoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, category: 'Women' },
                { id: 2, category: 'Kids' },
                { id: 3, category: 'Man' },
                { id: 4, category: 'Laptops' },
                { id: 5, category: 'Mobiles' },
                { id: 6, category: 'Camera' },
                { id: 7, category: 'Smart Watch' },
                { id: 8, category: 'Glass' },
                { id: 9, category: 'Monitors' },
                { id: 10, category: 'TV' },
                { id: 11, category: 'Women' },
                { id: 12, category: 'Kids' },
                { id: 13, category: 'Man' },
                { id: 14, category: 'Laptops' },
                { id: 15, category: 'Mobiles' },
                { id: 16, category: 'Camera' },
                { id: 17, category: 'Smart Watch' },
                { id: 18, category: 'Glass' },
                { id: 19, category: 'Monitors' },
                { id: 20, category: 'TV' },
                { id: 21, category: 'Smart Watch' },
                { id: 22, category: 'Glass' },
                { id: 23, category: 'Monitors' },
                { id: 24, category: 'TV' },
                { id: 25, category: 'Women' },
                { id: 26, category: 'Kids' },
                { id: 27, category: 'Man' },
                { id: 28, category: 'Laptops' },
                { id: 29, category: 'Mobiles' },
                { id: 30, category: 'Camera' },
            ],

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
                <View style={{ height: 50, marginHorizontal: 15, marginTop: 15, justifyContent: 'center', marginLeft: 20 }}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <BackIcon name='arrow-back' size={25} color="#404040" />
                    </TouchableOpacity>
                </View>
                {/* Category */}
                <View style={{ paddingBottom: 10 }}>
                    <View style={{ marginVertical: 20, marginHorizontal: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 30, fontFamily: "Poppins-Regular" }}>Category</Text>
                    </View>
                    <View style={{ height: this.setHeight() - 145, paddingHorizontal: 10, paddingBottom: 10 }}>
                        <FlatList
                            horizontal={false}
                            showsVerticalScrollIndicator={false}
                            data={this.state.data}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <View style={{ height: 60, width: DevWidth / 2.1, padding: 5 }}>
                                    <TouchableOpacity style={{ height: 50, borderRadius: 1, borderColor: '#818181', justifyContent: 'center', alignItems: 'center', elevation: 1 }} onPress={() => { this.props.navigation.navigate('categorylist_screen') }}>
                                        <Text style={{ color: "#000", textAlign: 'center' }}>{item.category}</Text>
                                    </TouchableOpacity>
                                </View>
                            }
                        // keyExtractor={item => item.id}
                        />
                    </View>
                </View>
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

export default CategoryScreen;

