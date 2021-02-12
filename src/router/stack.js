import React from 'react';
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../view/login'
import OrderScreen from '../view/order';

const RootNavigator = StackNavigator({
    Login: {
      screen: LoginScreen,
    },
    Order: {
      screen: OrderScreen,
    },
});

export default RootNavigator;