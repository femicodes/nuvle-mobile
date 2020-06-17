import React from 'react';
import { Text, SafeAreaView, Image, View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import FormInput from '../../components/FormInput';
import NuvleButton from '../../components/NuvleButton';
import logo from '../../assets/images/nuvule-logo.png';
import { colors } from '../../utils';

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.mainContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.header}>Sign up</Text>
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

          <View style={{ marginTop: 24 }}>
            <FormInput
              label='confirm password'
              placeholder='••••••'
              clearTextOnFocus={false}
              autoCapitalize='none'
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.signupButton}>
          <NuvleButton
            arrowType='darkGrey'
            text='Sign Up'
            backgroundColor={colors.LASER}
            textColor='rgba(71, 69, 81, 0.4)'
          />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.signInContainer}>
          <Text style={styles.signIn}>Returning? <Text style={{ fontWeight: 'bold' }}>Login</Text></Text>
        </TouchableOpacity>
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
    </SafeAreaView>
  )
};

export default SignUp;
