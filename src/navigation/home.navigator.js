import React from 'react';
import {LoginScreen} from '../screens/auth/sign-in.component';
import {HomeScreen} from '../screens/auth/sign-in2.component';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

export const HomeNavigator = () => (
  <Navigator headerMode="none">
    {true ? (
      <Screen name="Login2" component={HomeScreen} />
    ) : (
      <Screen name="Login" component={LoginScreen} />
    )}
  </Navigator>
);
