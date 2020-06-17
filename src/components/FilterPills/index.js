import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

const FilterPills = ({ name, clearPill, onPress, containerStyle = {} }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.pillContainer, clearPill && { backgroundColor: 'rgba(159, 159, 175, 0.8)' }, containerStyle]}>
      <Text style={styles.pillText}>{name}</Text>
      <View style={styles.plus}>
        {clearPill
          ? <Image style={styles.x} source={require('../../assets/images/x.png')} />
          : <Text style={styles.pillText}>+</Text>
        }
      </View>
    </TouchableOpacity>
  );
};

export default FilterPills;
