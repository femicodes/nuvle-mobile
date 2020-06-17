import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
import styles from './styles';

const PaymentStatus = ({ reference, onSuccess }) => {
  return (
    <Modalize handlePosition='inside' ref={reference} modalHeight={449} childrenStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Payment{'\n'}successful</Text>
      </View>
      <View style={styles.informationHeader}>
        <Text style={styles.information}>
          We hope your meal was succesfull{'\n'}Please spare a
          moment to give us{'\n'}feedback on your experience.
        </Text>
      </View>
      <TouchableOpacity onPress={onSuccess} activeOpacity={0.7} style={styles.button}>
        <Text style={styles.buttonText}>ok</Text>
        <Image style={styles.checkMark} source={require('../../assets/images/slim-checkmark.png')} />
      </TouchableOpacity>
    </Modalize>
  );
};

export default PaymentStatus;
