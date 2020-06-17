import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const FeedbackCard = () => {
  return (
    <View style={styles.feedbackCard}>
      <View style={styles.mealImageContainer}>
        <Image style={styles.feedbackImage} resizeMode='stretch' source={require('../../assets/images/feedback-image.png')} />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.feedbackHeader}>Vegetarian Pho</Text>
        <View style={styles.reactionLine}>
          <TouchableOpacity style={styles.reactionContainer} activeOpacity={0.7}>
            <Image style={styles.reactions} source={require('../../assets/images/smile.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactionContainer} activeOpacity={0.7}>
            <Image style={styles.reactions} source={require('../../assets/images/grin.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactionContainer} activeOpacity={0.7}>
            <Image style={styles.reactions} source={require('../../assets/images/scared.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactionContainer} activeOpacity={0.7}>
            <Image style={styles.reactions} source={require('../../assets/images/sad.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.reactionContainer} activeOpacity={0.7}>
            <Image style={styles.reactions} source={require('../../assets/images/unhappy.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FeedbackCard;
