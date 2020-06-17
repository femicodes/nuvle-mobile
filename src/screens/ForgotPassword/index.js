import React from 'react';
import { Text, SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import FormInput from '../../components/FormInput';
import NuvleButton from '../../components/NuvleButton';
import logo from '../../assets/images/nuvule-logo.png';
import { colors } from '../../utils';

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.header}>...so you{"\n"}forgot huh?</Text>
        <View style={styles.formContainer}>
          <FormInput
            label='email address'
            placeholder='kate@gmail.com'
            keyboardType='email-address'
            textContentType='emailAddress'
            autoCompleteType='email'
            autoCapitalize='none'
          />
        </View>
        <View style={{ marginTop: 44 }}>
          <NuvleButton
            onPress={() => navigation.navigate('ResetCode')}
            arrowType='darkGrey'
            text='Reset Password'
            backgroundColor={colors.LASER}
            textColor='rgba(71, 69, 81, 0.4)'
          />
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.signInContainer}>
          <Text style={styles.signIn}>Remembered Password? Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
