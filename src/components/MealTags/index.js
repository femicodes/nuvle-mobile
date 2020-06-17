import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const MealTags = ({ text, containerStyle = {}, textStyle = {} }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.tagText, textStyle]}>{text}</Text>
    </View>
  );
};

export default MealTags;
