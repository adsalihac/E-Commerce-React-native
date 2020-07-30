import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
// first starting file
import { enableScreens } from 'react-native-screens';
enableScreens();

import LoadingScreen from './LoadingScreen';
import MainScreen from './MainScreen';
import SignUpScreen from './SignUpScreen';
import SignInScreen from './SignInScreen';

import HomeScreen from './HomeScreen';

import MenuScreen from './MenuScreen';
import ProfileScreen from './ProfileScreen';
import CartScreen from './CartScreen';
import FavoriteScreen from './FavoriteScreen';
import OrderScreen from './OrderScreen';
import AddressScreen from './AddressScreen';

import CategoryScreen from './CategoryScreen';
import CategoryListScreen from './CategoryListScreen';
import FeaturedScreen from './FeaturedScreen';
import BestSellScreen from './BestSellScreen';
import ItemDetailsScreen from './ItemDetailsScreen';
import PaymentScreen from './PaymentScreen';
import CheckOutScreen from './CheckOutScreen';


const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="root_screen"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="root_screen" component={HomeScreen} />

            <Stack.Screen name="menu_screen" component={MenuScreen} />
            <Stack.Screen name="profile_screen" component={ProfileScreen} />
            <Stack.Screen name="cart_screen" component={CartScreen} />
            <Stack.Screen name="favorite_screen" component={FavoriteScreen} />
            <Stack.Screen name="order_screen" component={OrderScreen} />
            <Stack.Screen name="address_screen" component={AddressScreen} />

            <Stack.Screen name="category_screen" component={CategoryScreen} />
            <Stack.Screen name="categorylist_screen" component={CategoryListScreen} />
            <Stack.Screen name="featured_screen" component={FeaturedScreen} />
            <Stack.Screen name="bestsell_screen" component={BestSellScreen} />
            <Stack.Screen name="itemdetails_screen" component={ItemDetailsScreen} />

            <Stack.Screen name="payment_screen" component={PaymentScreen} />
            <Stack.Screen name="checkout_screen" component={CheckOutScreen} />
        </Stack.Navigator>

    );
}

const LoginStack = createNativeStackNavigator();

function Login() {
    return (
        <NavigationContainer>
            <LoginStack.Navigator
                initialRouteName="loading_screen"
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name="loading_screen" component={LoadingScreen} />
                <Stack.Screen name="main_screen" component={MainScreen} />
                <Stack.Screen name="signup_screen" component={SignUpScreen} />
                <Stack.Screen name="signin_screen" component={SignInScreen} />
                <LoginStack.Screen name="home_screen" component={MyStack} />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
}

export default Login