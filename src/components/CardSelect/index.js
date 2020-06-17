import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import masterCard from '../../assets/images/mastercard.png';
import visa from '../../assets/images/visa.png';

const CardSelect = ({ type, onPress }) => {
  const cardImages = {
    visa,
    mastercard: masterCard,
  }

  return (
    // TODO: add border on selected, check design
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.container}>
      <View style={styles.innerContainer}>
        <Image style={styles.cardImage} source={cardImages[type]} />
        <Text style={styles.cardNumber}>**** **** **** 4902</Text>
      </View>
      <Image style={styles.selectedIcon} source={require('../../assets/images/selected-icon.png')} />
    </TouchableOpacity>
  );
};

export default CardSelect;
