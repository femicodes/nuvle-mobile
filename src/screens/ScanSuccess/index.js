import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import styles from './styles';

const ScanSuccess = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={() => navigation.replace('Main')} activeOpacity={0.7} style={styles.nextContainer}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Scan{'\n'}Successful</Text>
        </View>
        <View style={styles.subHeader}>
          <Text style={styles.subHeaderText}>Welcome, enjoy your menu experience.</Text>
        </View>
        <ImageBackground source={require('../../assets/images/scan-success-background.png')}
          style={styles.backgroundImage} />
        <View style={styles.groupCodeContainer}>
          <Text style={styles.groupCodeText}>Group Code</Text>
          <Text style={styles.code}>334567</Text>
          <TouchableOpacity activeOpacity={0.6} >
            <Text style={styles.copyCode}>Copy Code</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
};

export default ScanSuccess;
