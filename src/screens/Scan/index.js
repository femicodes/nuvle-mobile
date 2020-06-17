import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styles';

const Scan = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('ScanSuccess')} activeOpacity={0.7} style={styles.nextContainer}>
        <Text style={styles.next}>Next</Text>
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Nice to see{'\n'}you, Kate.</Text>
      </View>
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>Looking good. Scan the table barcode{'\n'}start exploring the menu.</Text>
      </View>
      <ImageBackground source={require('../../assets/images/scan-background.png')}
        style={styles.backgroundImage}>
        <Image style={styles.scanFrame} source={require('../../assets/images/scan-frame.png')} />
      </ImageBackground>
      <View style={styles.groupCodeContainer}>
        <Text style={styles.groupCodeText}>Enter Group Code</Text>
        <Text style={styles.works}>How it works?</Text>
      </View>
    </SafeAreaView>
  )
};

export default Scan;
