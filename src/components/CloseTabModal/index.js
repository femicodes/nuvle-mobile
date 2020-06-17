import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Modalize } from 'react-native-modalize';
import NuvleButton from '../NuvleButton';
import { colors } from '../../utils';
import styles from './styles';

const CloseTabModal = ({ onPress, reference }) => {
  return (
    <Modalize handlePosition='inside' ref={reference} modalHeight={480} childrenStyle={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Close tab</Text>
      </View>
      <View style={styles.tipHeaderContainer}>
        <Text style={styles.tipHeader}>Add a tip</Text>
      </View>
      <View style={styles.tipContainer}>
        <TouchableOpacity activeOpacity={0.8} style={[styles.tipBox, styles.noTipContainer]}>
          <Text style={[styles.tipText, styles.noTipText]}>No tip</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={[styles.tipBox, styles.middleContainer, { backgroundColor: '#D4B471' }]}>
          <Text style={styles.tipText}>10%</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={[styles.tipBox, styles.middleContainer]}>
          <Text style={styles.tipText}>15%</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={[styles.tipBox, styles.lastContainer]}>
          <Text style={styles.tipText}>20%</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.customAmountContainer}>
        <Text style={styles.customAmountHeader}>Custom Amount</Text>
        <TextInput style={styles.customAmountInput} />
      </View>
      <View style={styles.totalContainer}>
        <Text style={styles.totalHeader}>Total</Text>
        <Text style={styles.totalAmount}>$175</Text>
      </View>
      <View style={styles.includesContainer}>
        <Text style={styles.includesText}>includes both taxes and tip ($17)</Text>
      </View>
      <View style={{ marginTop: 15, marginBottom: 30, marginHorizontal: 40 }}>
        <NuvleButton
          arrowType='black'
          text='Pay'
          backgroundColor={colors.LASER}
          textColor={colors.GUN_POWDER}
          onPress={onPress}
        />
      </View>
    </Modalize>
  );
};

export default CloseTabModal;
