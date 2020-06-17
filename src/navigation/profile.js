import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';

const ProfileStack = createStackNavigator();

const ProfileNavigation = () => {
  return (
    <ProfileStack.Navigator initialRouteName='Profile' headerMode='none' mode='modal'>
      <ProfileStack.Screen name='Profile' component={Profile} />
    </ProfileStack.Navigator>
  )
};

export default ProfileNavigation;