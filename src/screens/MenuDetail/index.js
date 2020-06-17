import React, { useState } from 'react';
import { View, SafeAreaView, Image, ImageBackground, Modal, TouchableOpacity, Text, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import MealTags from '../../components/MealTags';
import { formatText } from '../../utils';
import { sidesData } from '../../utils/constants';

const MenuDetail = ({ isVisible, closeModal, name = '' }) => {
  const [sidesSelection, setSidesSelection] = useState([]);
  const [sideName, setSideName] = useState([]);

  const onSelectSide = (sidesName, foodData) => {
    let sides = [...sidesSelection];
    let sidesNameCount = [...sideName];
    const dataIndex = sides.findIndex(data => data.name === foodData.name);

    if (dataIndex !== -1) {
      sides.splice(dataIndex, 1);
    } else {
      sides.push(foodData);
    }

    if (sidesNameCount.includes(sidesName)) {
      sidesNameCount.forEach((value, index) => {
        if (value === sidesName) {
          return sidesNameCount.splice(index, 1);
        }
      })
    } else {
      sidesNameCount.push(sidesName);
    }

    setSidesSelection(sides);
    setSideName(sidesNameCount);
  };

  return (
    <Modal
      animationType={'slide'}
      transparent={false}
      visible={isVisible}
    >
      <>
        <SafeAreaView style={styles.jumbotron}>
          <View style={styles.jumbotronContainer}>
            <TouchableOpacity activeOpacity={0.5} onPress={() => closeModal()}>
              <Image source={require('../../assets/images/close-icon.png')} style={styles.closeIcon} />
            </TouchableOpacity>
            <Image style={styles.slateBackground} source={require('../../assets/images/meal-slate.png')} />
            <Image style={styles.mealImage} source={require('../../assets/images/meal-item.png')} />
            <Text style={styles.mealName}>{formatText(name) || `Pepper\nAngus Steak`}</Text>
            <View style={styles.tagContainer}>
              <MealTags text='beef' />
              <MealTags text='spicy' />
            </View>
            <Text style={styles.mealGram}>220 kcal</Text>
          </View>
        </SafeAreaView>
        <View style={styles.amountContainer}>
          <Text style={[styles.amount, styles.dollar]}>$</Text><Text style={styles.amount}>85</Text>
        </View>
        <ScrollView>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionHeader}>Description</Text>
            <Text style={styles.description}>
              Easy pan-seared chicken breasts is one of many delicious ways we delight your taste buds.
              At Le Bardin we serve this with anchovy gracy and seared vegetables.

          </Text>
          </View>
          <View style={styles.sidesContainer}>
            <Text style={styles.descriptionHeader}>Sides</Text>
            <View>
              <FlatList
                data={sidesData}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                renderItem={({ item }) => {
                  const selectedSide = sideName.includes(`${item.name}`);
                  return (
                    <View style={styles.sidesImageContainer}>
                      <TouchableOpacity onPress={() => onSelectSide(item.name, item)} activeOpacity={0.7}>
                        <ImageBackground style={styles.sidesImage} source={item.image}>
                          {!selectedSide
                            ? <View style={styles.sidesAmountContainer}>
                              <Text style={[styles.sidesCurrency, styles.sidesAmount]}>$</Text>
                              <Text style={styles.sidesAmount}>25</Text>
                            </View>
                            : <>
                              <View style={styles.overlay} />
                              <View style={styles.checkMarkContainer}>
                                <Image style={styles.sidesCheckmark} source={require('../../assets/images/sides-checkmark.png')} />
                              </View>
                            </>}
                        </ImageBackground>
                      </TouchableOpacity>
                      <Text style={styles.sidesName}>{item.name}</Text>
                      <Text style={styles.sidesUnits}>{item.units}</Text>
                    </View>
                  )
                }}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.7} style={styles.orderButton}>
          <Text style={styles.orderText}>Order</Text>
        </TouchableOpacity>
      </>
    </Modal>
  )
};

export default MenuDetail;
