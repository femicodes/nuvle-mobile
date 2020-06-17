import React from 'react';
import { Text, SafeAreaView, Image, Platform, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import FormInput from '../../components/FormInput';
import NuvleButton from '../../components/NuvleButton';
import logo from '../../assets/images/nuvule-logo.png';
import { colors } from '../../utils';

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 0}>
        <ScrollView style={styles.mainContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.header}>Login</Text>
          <View style={styles.formContainer}>
            <FormInput
              label='email address'
              placeholder='kate@gmail.com'
              keyboardType='email-address'
              textContentType='emailAddress'
              autoCompleteType='email'
              autoCapitalize='none'
            />

            <View style={{ marginTop: 24 }}>
              <FormInput
                label='password'
                placeholder='••••••'
                clearTextOnFocus={false}
                autoCapitalize='none'
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={styles.loginButton}>
            <NuvleButton
              onPress={() => navigation.replace('Scan')}
              arrowType='darkGrey'
              text='Login'
              backgroundColor={colors.LASER}
              textColor='rgba(71, 69, 81, 0.4)'
            />
          </View>
          <View style={styles.accountAction}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} activeOpacity={0.7}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('SignUp')} >
              <Text style={styles.newUser}>New User? <Text style={{ fontWeight: 'bold' }}>Sign Up</Text></Text>
            </TouchableOpacity>
          </View>
          <View style={styles.authOption}>
            <Image style={styles.optionLine} source={require('../../assets/images/div-line.png')} />
            <Text style={styles.optionText}>OR</Text>
            <Image style={styles.optionLine} source={require('../../assets/images/div-line.png')} />
          </View>
          <View style={styles.socials}>
            <NuvleButton
              arrowType='lightGrey'
              text='Login with Google'
              backgroundColor={colors.RED}
              textColor={colors.WHISPER}
            />
            <NuvleButton
              arrowType='lightGrey'
              text='Login with Facebook'
              backgroundColor={colors.BLUE}
              textColor={colors.WHISPER}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};

export default Login;
