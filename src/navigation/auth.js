import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import SignUp from '../screens/SignUp';
import NewPassword from '../screens/NewPassword';
import ResetCode from '../screens/ResetCode';

const AuthStack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator initialRouteName='Login' headerMode='none' >
      <AuthStack.Screen name='Login' component={Login} />
      <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
      <AuthStack.Screen name='SignUp' component={SignUp} />
      <AuthStack.Screen name='NewPassword' component={NewPassword} />
      <AuthStack.Screen name='ResetCode' component={ResetCode} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
