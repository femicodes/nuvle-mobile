import React, { useState } from 'react';
import {
  View, Text, SafeAreaView, Modal, Image,
  TouchableOpacity, ScrollView, TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import WaiterCall from '../WaiterCall';
import FeedbackCard from '../../components/FeedbackCard';
import styles from './styles';
import { colors } from '../../utils';
import waiterCallIcon from '../../assets/images/waiter-call-icon.png';

const MealFeedback = ({ isVisible, closeModal }) => {
  const [waiterCallVisible, setWaiterCallVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <WaiterCall isVisible={waiterCallVisible} closeModal={() => setWaiterCallVisible(!waiterCallVisible)} />
      <View style={styles.headerContainer}>
        <View style={styles.headerSubContainer}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image style={styles.backIcon} source={require('../../assets/images/back-icon.png')} />
          </TouchableOpacity>
          <TextInput placeholder='Search..' placeholderTextColor={colors.ROLLING_STONE} style={styles.searchInput} />
        </View>
        <TouchableOpacity onPress={() => setWaiterCallVisible(true)} activeOpacity={0.7}>
          <Image source={waiterCallIcon} style={styles.waiterCall} />
        </TouchableOpacity>
      </View>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Feedback</Text>
      </View>
      <ScrollView style={styles.mealListContainer}>
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </ScrollView>
      {/* <LinearGradient style={{ paddingBottom: 50 }} colors={['rgba(73, 71, 80, 0)', '#3E3D46']}>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <Text style={styles.buttonText}>thank you</Text>
          <Image style={styles.checkMark} source={require('../../assets/images/slim-checkmark.png')} />
        </TouchableOpacity>
      </LinearGradient> */}
    </SafeAreaView>
  );
};

export default MealFeedback;
