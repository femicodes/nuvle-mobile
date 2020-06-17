import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, Modal, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useNavigation } from '@react-navigation/native';
import GroupCode from '../GroupCode';
import OrderCard from '../../components/OrderCard';
import CloseTabModal from '../../components/CloseTabModal';
import PaymentOptions from '../../components/PaymentOptions';
import SelectCardModal from '../../components/SelectCardModal';
import AddCardModal from '../../components/AddCardModal';
import PaymentStatus from '../../components/PaymentStatus';
import styles from './styles';

const Order = ({ isVisible, closeModal }) => {
  const navigation = useNavigation();
  const [groupCodeVisible, setGroupCodeVisible] = useState(false);
  const tabRef = useRef(Modalize);
  const paymentRef = useRef(Modalize);
  const selectCardRef = useRef(Modalize);
  const addCardRef = useRef(Modalize);
  const paymentStatusRef = useRef(Modalize);
  const feedbackRef = useRef(Modalize);

  const moveToPaymentModal = () => {
    tabRef.current.close();
    paymentRef.current.open();
  };

  const moveToCardsModal = () => {
    paymentRef.current.close();
    selectCardRef.current.open();
  };

  const moveToPaymentStatus = () => {
    selectCardRef.current.close();
    paymentStatusRef.current.open();
  };

  const moveToFeedbackScreen = () => {
    paymentStatusRef.current.close();
    closeModal();
    navigation.navigate('MealFeedback');
  };

  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={isVisible}
    >
      <SafeAreaView style={styles.container}>
        <CloseTabModal onPress={() => moveToPaymentModal()} reference={tabRef} />
        <PaymentOptions reference={paymentRef} openSavedCards={moveToCardsModal} />
        <SelectCardModal reference={selectCardRef} showPaymentStatus={() => moveToPaymentStatus()} openAddCardModal={() => addCardRef.current.open()} />
        <AddCardModal reference={addCardRef} />
        <PaymentStatus onSuccess={moveToFeedbackScreen} reference={paymentStatusRef} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <GroupCode isVisible={groupCodeVisible} closeModal={() => setGroupCodeVisible(!groupCodeVisible)} />
          <View style={styles.topContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => closeModal()}>
              <Image source={require('../../assets/images/close-icon.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <View style={styles.headingContainer}>
              <Text style={styles.headingText}>My Order</Text>
              <TouchableOpacity onPress={() => setGroupCodeVisible(true)} activeOpacity={0.7} style={styles.groupCodeContainer}>
                <Text style={styles.groupCodeText}>Group code</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 35 }}>
              <View>
                <Text style={styles.sectionHeader}>Food</Text>
                <View style={{ marginTop: 14 }}>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                  </ScrollView>
                </View>
              </View>
              <View style={{ marginTop: 23 }}>
                <Text style={styles.sectionHeader}>Drinks</Text>
                <View style={{ marginTop: 14 }}>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <OrderCard />
                    <OrderCard />
                    <OrderCard />
                  </ScrollView>
                </View>
              </View>
              <View style={{ marginTop: 23 }}>
                <Text style={styles.sectionHeader}>Dessert</Text>
                <View style={{ marginTop: 14 }}>
                  <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                    <OrderCard />
                    <OrderCard />
                  </ScrollView>
                </View>
              </View>
            </View>
          </View>
          <View style={{ marginTop: 30, marginBottom: 30 }}>
            <TouchableOpacity onPress={() => tabRef.current.open()} activeOpacity={0.7} style={styles.closeTabButton}>
              <Text style={styles.closeTabText}>Close Tab</Text>
              <Image style={styles.closeTabIcon} source={require('../../assets/images/black-arrow.png')} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default Order;
