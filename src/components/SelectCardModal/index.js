import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CardSelect from '../CardSelect';
import NuvleButton from '../NuvleButton';
import { colors } from '../../utils';
import styles from './styles';

const SelectCardModal = ({ reference, openAddCardModal, showPaymentStatus }) => {
  return (
    <Modalize handlePosition='inside' ref={reference} modalHeight={449} childrenStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Select Card Option</Text>
      </View>
      <View style={styles.cardContainer}>
        <CardSelect type='mastercard' />
        <CardSelect type='visa' />
      </View>
      <TouchableOpacity onPress={openAddCardModal} activeOpacity={0.7} style={styles.addNewCard}>
        <Text style={styles.addCardText}>Add new card</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <NuvleButton
          arrowType='black'
          text='Pay $175'
          backgroundColor={colors.LASER}
          textColor={colors.GUN_POWDER}
          onPress={showPaymentStatus}
        />
      </View>
    </Modalize>
  );
};

export default SelectCardModal;
