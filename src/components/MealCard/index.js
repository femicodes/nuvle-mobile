import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MealTags from '../MealTags';
import styles from './styles';
import { formatText } from '../../utils';

const MealCard = ({ name = '', image = '', onPress, onPressOrder }) => {
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.slateBackground} source={require('../../assets/images/slate-background.png')} />
        <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
          <Text style={styles.mealName}>{formatText(name) || `Pepper\nAngus Steak`}</Text>
        </TouchableOpacity>
        <View style={styles.tagContainer}>
          <MealTags text='beef' />
          <MealTags text='spicy' />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={onPressOrder} activeOpacity={0.7} style={styles.orderIconContainer}>
            <Image style={styles.orderTick} source={require('../../assets/images/dark-checkmark.png')} />
            <Text style={styles.orderText}>order</Text>
          </TouchableOpacity>
          <View style={styles.amountContainer}>
            <Text style={styles.dollar}>$</Text>
            <Text style={styles.amount}>85</Text>
          </View>
        </View>
      </View>
      <View>
        <Image style={styles.foodItemImage} source={image || require('../../assets/images/food-item.png')} />
      </View>
    </>
  )
};

export default MealCard;
