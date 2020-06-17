import React, { useState } from 'react';
import { View, Text, SafeAreaView, Modal, Image, TouchableOpacity, ImageBackground, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import { sidesData } from '../../utils/constants';

const Sides = ({ isVisible, closeModal }) => {
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
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>
          <TouchableOpacity onPress={closeModal} style={styles.cancelContainer} activeOpacity={0.7}>
            <Image style={styles.cancelIcon} source={require('../../assets/images/cancel.png')} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Sides</Text>
          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderHeader}>Salads</Text>
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
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderHeader}>Salads</Text>
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
            <View style={styles.sliderContainer}>
              <Text style={styles.sliderHeader}>Salads</Text>
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
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Sides;
