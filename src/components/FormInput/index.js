import React from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './styles';

const FormInput = (props) => {
  const { label, placeholder } = props;
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor='rgba(71, 69, 81, 0.9)'
        placeholder={placeholder}
        style={styles.textInput}
        {...props}
      />
    </View>
  )
};


export default FormInput;
