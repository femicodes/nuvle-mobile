import React from 'react';
import { View, Text, SafeAreaView, Modal, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { colors } from '../../utils';

const Search = ({ isVisible, closeModal }) => {
  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={isVisible}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => closeModal()}>
            <Image style={styles.closeIcon} source={require('../../assets/images/close-search.png')} />
          </TouchableOpacity>
          <View style={styles.searchContainer}>
            <TextInput placeholder='Search..' placeholderTextColor={colors.GOLD} style={styles.searchInput} />
          </View>
          <View style={styles.resultsContainer}>
            <Text style={styles.searchResults}>Chicken Alfredo</Text>
            <Text style={styles.searchResults}>Chicken Lasanga</Text>
            <Text style={styles.searchResults}>Pan Fried Chicken</Text>
            <Text style={styles.searchResults}>Butter Chicken</Text>
            <Text style={styles.searchResults}>Chicken Caesar Salad</Text>
            <Text style={styles.searchResults}>Grilled Chicken Breasts</Text>
            <Text style={styles.searchResults}>Chicken Soup</Text>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Search;
