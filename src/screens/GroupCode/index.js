import React from 'react';
import { View, Text, SafeAreaView, Modal, Image, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const GroupCode = ({ isVisible, closeModal }) => {
  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={isVisible}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView bounces={false}>
          <TouchableOpacity onPress={closeModal} activeOpacity={0.7} style={styles.backIconContainer}>
            <Image style={styles.backIcon} source={require('../../assets/images/back-icon.png')} />
          </TouchableOpacity>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Your Group{'\n'}Code</Text>
          </View>
          <View style={styles.codeContainer}>
            <Text style={styles.groupCode}>334567</Text>
          </View>
          <TouchableOpacity activeOpacity={0.5} style={styles.copyCodeContainer}>
            <Text style={styles.copyCode}>Copy Code</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} onPress={closeModal} style={styles.backButtonContainer}>
            <LinearGradient colors={['#E5C27A', '#C0A368']} style={{ height: 56, justifyContent: 'center' }}>
              <Text style={styles.backButtonText}>back</Text>
            </LinearGradient>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default GroupCode;
