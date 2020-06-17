import React, { useState, useRef } from 'react';
import {
  View, Modal, Text, SafeAreaView, Image, Platform,
  TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from 'react-native-check-box';
import FilterPills from '../../components/FilterPills';
import MealTags from '../../components/MealTags';
import Sides from '../Sides';
import styles from './styles';
import { colors } from '../../utils';

const OrderPopup = ({ isVisible, closePopup }) => {
  const [sidesVisible, setSidesVisible] = useState(false);
  const [checked, setCheck] = useState(true);

  // TODO: build a select tag component
  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={isVisible}
    >
      <KeyboardAvoidingView
        behavior='position'
        keyboardVerticalOffset={Platform.OS === 'ios' ? 30 : 0}
        style={styles.container}
      >
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.topContainer}>
            <Sides isVisible={sidesVisible} closeModal={() => setSidesVisible(!sidesVisible)} />
            <Image style={styles.slateBackground} source={require('../../assets/images/meal-slate.png')} />
            <Image style={styles.mealImage} source={require('../../assets/images/barbeque.png')} />
            <Text style={styles.mealName}>{`Pepper\nAngus Steak`}</Text>
            <View style={styles.tagContainer}>
              <MealTags text='beef' />
              <MealTags text='spicy' />
            </View>
            <Text style={styles.quantityText}>Quantity</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity activeOpacity={0.6}>
                <Image style={styles.quantityIcon} source={require('../../assets/images/icon-minus.png')} />
              </TouchableOpacity>
              <Text style={styles.quantityNumber}>1</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Image style={styles.quantityIcon} source={require('../../assets/images/icon-plus.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <LinearGradient colors={['#2E2D34', '#1D1C20']} style={{ flex: 1 }}>
            <View style={styles.middleContainer}>
              <Text style={styles.preferenceHeader}>Cooking Preference</Text>
              <View style={styles.filterContainer}>
                <MealTags containerStyle={{ marginTop: 12 }} text='rare' />
                <MealTags containerStyle={{ marginTop: 12 }} text='medium rare' />
                <MealTags containerStyle={{ marginTop: 12 }} text='medium' />
                <MealTags containerStyle={{ marginTop: 12 }} text='medium well' />
                <MealTags
                  containerStyle={{ marginTop: 12, backgroundColor: '#E5C27A' }}
                  textStyle={{ color: 'black' }}
                  text='well done'
                />
              </View>
              <View style={styles.selectSideContainer}>
                <Text style={styles.selectSideHeader}>Select a Side</Text>
                <Text style={styles.sideCount}>Dish Sides : 2 Sides</Text>
                <View style={styles.pillContainer}>
                  <FilterPills containerStyle={{ backgroundColor: colors.ABBEY, }} onPress={() => setSidesVisible(true)} name='pick sides' />
                </View>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>Price</Text>
                  <View style={styles.amountContainer}>
                    <Text style={[styles.amount, { marginRight: 4 }]}>$</Text>
                    <Text style={styles.amount}>85</Text>
                  </View>
                </View>
              </View>
              <View style={styles.noteContainer}>
                <Text style={styles.noteHeader}>Add a note</Text>
                <TextInput
                  multiline
                  editable
                  style={styles.noteInput}
                  placeholder='Any Preferences'
                  placeholderTextColor='rgba(71, 69, 81, 0.9)'
                />
              </View>
              <View style={styles.takeAwayContainer}>
                <Text style={styles.takeAwayHeader}>To Go?</Text>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    style={{ width: 18, height: 18 }}
                    onClick={() => setCheck(!checked)}
                    isChecked={checked}
                    checkBoxColor='#fff'
                    checkedCheckBoxColor='#fff'
                    uncheckedCheckBoxColor='#fff'
                  />
                  <Text style={styles.checkboxText}>Select Takeway</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
          <View style={styles.buttonContainer}>
            <TouchableOpacity activeOpacity={0.6} style={styles.sendOrder}>
              <Text style={styles.sendOrderText}>Send Order</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              onPress={closePopup}
              style={styles.cancelOrder}>
              <Text style={styles.cancelOrderText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <SafeAreaView style={{ flex: 0.001, backgroundColor: '#1D1C20' }} />
    </Modal>
  );
};

export default OrderPopup;
