import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './auth';
import MainNavigation from './main';
import ScanNavigation from './scan';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth' headerMode='none'>
        <Stack.Screen name='Auth' component={AuthNavigation} />
        <Stack.Screen name='Main' component={MainNavigation} />
        <Stack.Screen name='Scan' component={ScanNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
