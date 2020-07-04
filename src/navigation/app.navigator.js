import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './home.navigator';
import {createStackNavigator} from '@react-navigation/stack';

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
