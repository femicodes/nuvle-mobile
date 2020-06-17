import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Scan from '../screens/Scan';
import ScanSuccess from '../screens/ScanSuccess';

const ScanStack = createStackNavigator();

const ScanNavigation = () => {
  return (
    <ScanStack.Navigator initialRouteName='Scan' headerMode='none'>
      <ScanStack.Screen name='Scan' component={Scan} />
      <ScanStack.Screen name='ScanSuccess' component={ScanSuccess} />
    </ScanStack.Navigator>
  )
};

export default ScanNavigation;
