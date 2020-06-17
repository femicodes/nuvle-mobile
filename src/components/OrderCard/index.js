import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const OrderCard = () => {
  return (
    <View style={styles.orderCard}>
      <View style={styles.mainCardContainer}>
        <Text style={styles.foodName}>Pepper Angus Steak</Text>
        <Image style={styles.cardSlateImage} source={require('../../assets/images/card-slate.png')} />
        <Image style={styles.cardFoodImage} source={require('../../assets/images/card-beef.png')} />
        <View style={styles.midContainer}>
          <View style={{ height: 54 }}>
            <View style={styles.categoryPill}>
              <Text style={styles.categoryText}>well done</Text>
            </View>
          </View>
          <View style={styles.counterContainer}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image style={styles.counterIcon} source={require('../../assets/images/icon-minus.png')} />
            </TouchableOpacity>
            <Text style={styles.counterText}>2</Text>
            <TouchableOpacity activeOpacity={0.5}>
              <Image style={styles.counterIcon} source={require('../../assets/images/icon-plus.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.priceHeader}>Price</Text>
        <View style={styles.amountContainer}>
          <Text style={[styles.amount, { paddingRight: 4 }]}>$</Text>
          <Text style={styles.amount}>85</Text>
        </View>
      </View>
    </View>
  )
};

export default OrderCard;
