import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { getHeight } from '../../utils/styles';
import styles from './styles';

const OptionsModal = ({ reference }) => {
  return (
    <Modalize handlePosition='inside' modalHeight={getHeight(456)} ref={reference} childrenStyle={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.headerText}>Dietary</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
            <Text style={styles.optionText}>Vegetarian</Text>
            <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
            <Text style={styles.optionText}>Vegan</Text>
            <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
            <Text style={styles.optionText}>Gluten Free</Text>
            <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
            <Text style={styles.optionText}>Halal</Text>
            <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => reference.current.close()} activeOpacity={0.7} style={styles.applyButton}>
          <Text style={styles.applyText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Modalize>
  )
};

export default OptionsModal;
