import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Modalize } from 'react-native-modalize';
import CouponCode from '../CouponCode';
import darkArrow from '../../assets/images/dark-arrow.png';
import styles from './styles';

const PaymentOptions = ({ reference, openSavedCards }) => {
  const [showCouponModal, setShowCouponModal] = useState(false);

  return (
    <Modalize handlePosition='inside' ref={reference} modalHeight={590} childrenStyle={styles.container}>
      <CouponCode isVisible={showCouponModal} closeModal={() => setShowCouponModal(!showCouponModal)} />
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Payment{'\n'}Options</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.cardHeader}>Pay with Credit/Debit Card</Text>
      </View>
      <TouchableOpacity onPress={openSavedCards} activeOpacity={0.7} style={styles.savedCard}>
        <View style={styles.innerContainer}>
          <Image style={styles.cardIcon} source={require('../../assets/images/card-icon.png')} />
          <Text style={styles.savedCardText}>Saved Cards</Text>
        </View>
        <Image
          source={darkArrow}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <View style={styles.applePayContainer}>
        <Text style={styles.applePayText}>Pay with Apple Pay</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.applePayButton}>
        <Image style={styles.applePayLogo} source={require('../../assets/images/apple-pay.png')} />
        <Image source={darkArrow} style={styles.arrowIcon} />
      </TouchableOpacity>
      <View style={styles.applePayContainer}>
        <Text style={styles.applePayText}>Pay with PayPal</Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={[styles.applePayButton, styles.paypalButton]}>
        <Image style={styles.paypalLogo} source={require('../../assets/images/paypal.png')} />
        <Image source={darkArrow} style={styles.arrowIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setShowCouponModal(!showCouponModal)} activeOpacity={0.7} style={styles.couponButton}>
        <Text style={styles.couponText}>Enter Coupon Code</Text>
        <Image source={darkArrow} style={styles.arrowIcon} />
      </TouchableOpacity>
    </Modalize>
  );
};

export default PaymentOptions;
