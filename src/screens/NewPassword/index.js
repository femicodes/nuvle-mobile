import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FormInput from '../../components/FormInput';
import NuvleButton from '../../components/NuvleButton';
import backIcon from '../../assets/images/back-icon.png';
import { colors } from '../../utils';
import styles from './styles';

const NewPassword = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <Image style={styles.backIcon} source={backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>choose new{"\n"}password.</Text>
        <View style={styles.formContainer}>
          <FormInput
            label='password'
            placeholder='••••••'
            clearTextOnFocus={false}
            autoCapitalize='none'
            secureTextEntry={true}
          />

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
        <View style={styles.resetButton}>
          <NuvleButton
            arrowType='darkGrey'
            text='Reset Password'
            backgroundColor={colors.LASER}
            textColor='rgba(71, 69, 81, 0.4)'
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;
