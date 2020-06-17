import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MenuNavigation from './menu';
import ProfileNavigation from './profile';
import { colors } from '../utils'
import { getHeight } from '../utils/styles';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName;
          if (route.name === 'Menu') {
            iconName = 'book'
          } else if (route.name === 'Profile') {
            iconName = 'user'
          }
          return <FeatherIcon name={iconName} size={22} color={color} />
        }
      })}
      tabBarOptions={{
        activeTintColor: colors.TWINE,
        inactiveTintColor: 'rgba(199, 199, 212, 0.4)',
        showLabel: false,
        tabStyle: {
          backgroundColor: '#3F3F46',
          height: 88,
          paddingBottom: 35,
        },
        style: {
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen name='Menu' component={MenuNavigation} />
      <Tab.Screen name='Profile' component={ProfileNavigation} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
