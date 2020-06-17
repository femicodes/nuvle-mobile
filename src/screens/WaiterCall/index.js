import React from 'react';
import { View, Text, Modal, SafeAreaView, Image, ImageBackground, TouchableOpacity } from 'react-native';
import hapticFeedback from "react-native-haptic-feedback";
import styles from './styles';

const WaiterCall = ({ isVisible, closeModal }) => {
  const callWaiter = () => {
    hapticFeedback.trigger('impactHeavy', {
      ignoreAndroidSystemSettings: false,
      enableVibrateFallback: true
    });
  }

  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={isVisible}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <TouchableOpacity delayLongPress={3000} onLongPress={callWaiter} activeOpacity={0.9}>
            <ImageBackground style={styles.ovalBackground} source={require('../../assets/images/oval.png')}>
              <Image style={styles.waiterIcon} source={require('../../assets/images/waiter-call-icon-large.png')} />
            </ImageBackground>
          </TouchableOpacity>
          <View style={styles.instructionsContainer}>
            <Text style={styles.instructions}>Press for <Text style={{ fontWeight: 'bold' }}>3{'\n'}seconds</Text> to call{'\n'}a waiter</Text>
          </View>
          <TouchableOpacity onPress={() => closeModal()} activeOpacity={0.6} style={styles.cancelContainer}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default WaiterCall;
