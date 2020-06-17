import React from 'react';
import { SafeAreaView, View, Text, Modal, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const DrinkCTA = ({ isVisible, closeModal }) => {
  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={isVisible}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => closeModal()} activeOpacity={0.7} style={styles.closeModal}>
          <Image style={styles.closeIcon} source={require('../../assets/images/modal-close.png')} />
        </TouchableOpacity>
        <View style={styles.upsellContainer}>
          <Image style={styles.upsell} source={require('../../assets/images/drink-upsell.png')} />
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Have a Drink</Text>
        </View>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeader}>And relax before you order</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>
            Our wines always start with
          the most{'\n'}delicious grapes from the Central{'\n'}Valley of California. ...
          We offer Chianti,{'\n'}a full-bodied Burgundy, a Sweet Red, a{'\n'}Merlot,
                      a Chablis, and many more.
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.nextContainer}>
          <Image style={styles.next} source={require('../../assets/images/next.png')} />
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

export default DrinkCTA;
