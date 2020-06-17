import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import darkGreyArrow from '../../assets/images/dark-grey-arrow.png';
import lightGreyArrow from '../../assets/images/light-grey-arrow.png';
import blackArrow from '../../assets/images/black-arrow.png';
import darkArrow from '../../assets/images/dark-arrow.png';

const NuvleButton = ({ text, textColor, backgroundColor, arrowType, onPress }) => {

  const arrowTypeList = {
    darkGrey: darkGreyArrow,
    lightGrey: lightGreyArrow,
    black: blackArrow,
    dark: darkArrow
  }

  const onPressButton = () => {
    onPress && onPress();
  }

  return (
    <TouchableOpacity onPress={onPressButton} style={[styles.buttonContainer, { backgroundColor }]} activeOpacity={0.7}>
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
      <Image
        source={arrowTypeList[arrowType]}
        style={styles.arrowIcon}
      />
    </TouchableOpacity>
  );
};

export default NuvleButton;
