import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import MealFeedback from '../screens/MealFeedback';

const MenuStack = createStackNavigator();

const MenuNavigation = () => {
  return (
    <MenuStack.Navigator initialRouteName='Home' headerMode='none'>
      <MenuStack.Screen name='Home' component={Home} />
      <MenuStack.Screen name='MealFeedback' component={MealFeedback} />
    </MenuStack.Navigator>
  )
};

export default MenuNavigation;
