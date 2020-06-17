import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { colors } from '../../utils';
import styles from './styles';

const AddCardModal = ({ reference }) => {
  return (
    <Modalize handlePosition='inside' ref={reference} modalHeight={449} childrenStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Add New Card</Text>
      </View>
      <TextInput
        placeholder='XXXX - XXXX - XXXX - XXXX'
        placeholderTextColor={colors.SILVER}
        style={styles.cardNumberInput}
      />
      <View style={styles.codeContainer}>
        <TextInput maxLength={4} placeholder='MM / YY' placeholderTextColor={colors.SILVER} style={[styles.cardDetailInput, { marginRight: 34 }]} />
        <TextInput maxLength={3} placeholder='CVV 2' placeholderTextColor={colors.SILVER} style={[styles.cardDetailInput, { marginRight: 34 }]} />
        <TextInput placeholder='PIN' placeholderTextColor={colors.SILVER} style={styles.cardDetailInput} />
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.addCardButton}>
        <Text style={styles.addCardText}>add card</Text>
        <Image style={styles.checkMark} source={require('../../assets/images/slim-checkmark.png')} />
      </TouchableOpacity>
    </Modalize>
  );
};

export default AddCardModal;
