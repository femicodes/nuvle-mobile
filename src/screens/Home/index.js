import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import { Modalize } from 'react-native-modalize';
import styles from './styles';
import searchIcon from '../../assets/images/search-icon.png';
import waiterCallIcon from '../../assets/images/waiter-call-icon.png';
import { menuHeaders } from '../../utils/constants';
import { getHeight } from '../../utils/styles';
import FilterPills from '../../components/FilterPills';
import DrinkCTA from '../DrinkCTA';
import WaiterCall from '../WaiterCall';
import Search from '../Search';
import MealCard from '../../components/MealCard';
import MenuDetail from '../../screens/MenuDetail';
import OptionsModal from '../../components/OptionsModal';
import Sides from '../Sides';
import OrderPopup from '../OrderPopup';
import Order from '../Order';
import dumpling from '../../assets/images/dumpling.png';

const Home = ({ navigation }) => {
  const [tabIndex, setTabIndex] = useState(1);
  const [drinkVisible, setdrinkVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [waiterCallVisible, setWaiterCallVisible] = useState(false);
  const [menuDetailVisible, setMenuDetailVisible] = useState(false);
  const [sidesVisible, setSidesVisible] = useState(false);
  const [orderPopupVisible, setOrderPopupVisible] = useState(false);
  const [orderScreenVisible, setOrderScreenVisible] = useState(false);

  const modalizeRef = useRef(Modalize);
  const optionModalRef = useRef(Modalize);

  const onOpen = () => {
    modalizeRef.current.open();
  };

  const onClose = () => {
    modalizeRef.current.close();
  }

  const onOpenOptions = () => {
    optionModalRef.current.open();
  }

  useEffect(() => {
    /* setTimeout(() => {
      setdrinkVisible(true)
    }, 3000); */
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Search isVisible={searchVisible} closeModal={() => setSearchVisible(!searchVisible)} />
        <DrinkCTA isVisible={drinkVisible} closeModal={() => setdrinkVisible(!drinkVisible)} />
        <WaiterCall isVisible={waiterCallVisible} closeModal={() => setWaiterCallVisible(!waiterCallVisible)} />
        <MenuDetail isVisible={menuDetailVisible} closeModal={() => setMenuDetailVisible(!menuDetailVisible)} />
        <Sides isVisible={sidesVisible} closeModal={() => setSidesVisible(!sidesVisible)} />
        <OptionsModal reference={optionModalRef} />
        <Order isVisible={orderScreenVisible} closeModal={() => setOrderScreenVisible(!orderScreenVisible)} />
        <Modalize handlePosition='inside' modalHeight={getHeight(690)} ref={modalizeRef} childrenStyle={styles.modalStyle}>
          <View style={styles.modalContainer}>
            <Text style={styles.headerText}>Dietary</Text>
            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
                <Text style={styles.optionText}>Vegetarian</Text>
                <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
                <Text style={styles.optionText}>Vegan</Text>
                <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
                <Text style={styles.optionText}>Gluten Free</Text>
                <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
                <Text style={styles.optionText}>Halal</Text>
                <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
              </TouchableOpacity>
            </View>

            <Text style={styles.headerText}>Allergens</Text>
            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
                <Text style={styles.optionText}>Nuts</Text>
                <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
                <Text style={styles.optionText}>Sea Food</Text>
                <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
                <Text style={styles.optionText}>Lactose-intolerant</Text>
                <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionStyle} activeOpacity={0.7}>
                <Text style={styles.optionText}>Glucose</Text>
                <Image style={styles.optionCheckmark} source={require('../../assets/images/gold-checkmark.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity onPress={onClose} activeOpacity={0.7} style={styles.applyButton}>
            <Text style={styles.applyText}>Apply</Text>
          </TouchableOpacity>
        </Modalize>
        <OrderPopup
          isVisible={orderPopupVisible}
          closePopup={() => setOrderPopupVisible(!orderPopupVisible)}
        />
        <View style={styles.topNav}>
          <TouchableOpacity onPress={() => setSearchVisible(true)} activeOpacity={0.7}>
            <Image source={searchIcon} style={styles.searchIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setWaiterCallVisible(true)} activeOpacity={0.7}>
            <Image source={waiterCallIcon} style={styles.waiterCall} />
          </TouchableOpacity>
        </View>
        <View style={styles.tabContainer}>
          <FlatList
            data={menuHeaders}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => setTabIndex(item.id)}
                style={[styles.tabList, tabIndex === item.id && styles.tabActiveBottom]} activeOpacity={0.7}>
                <Text style={[styles.inactiveTabText, tabIndex === item.id && styles.activeTabText]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity onPress={onOpen} style={styles.filterImageContainer} activeOpacity={0.7}>
            <Image style={styles.filterImage} source={require('../../assets/images/filter-icon.png')} />
          </TouchableOpacity>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.filterPills}>
              <View style={styles.filterPillsContainer}>
                <FilterPills onPress={() => onOpenOptions()} name='DIETARY' />
                <FilterPills onPress={() => setSidesVisible(true)} name='SIDES' />
                <FilterPills onPress={() => onOpenOptions()} name='CATEGORIES' />
              </View>
            </View>
            {/*  <View style={styles.clearPill}>
            <FilterPills name='CLEAR ALL' clearPill={true} />
          </View> */}
          </ScrollView>
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.menuList}>
          <MealCard
            onPressOrder={() => setOrderPopupVisible(true)}
            onPress={() => setMenuDetailVisible(true)}
          />
          <MealCard onPress={() => setMenuDetailVisible(true)} name='Pan-Seared Chicken' />
          <MealCard onPress={() => setMenuDetailVisible(true)} name='Asian Dumplings' />
          <MealCard onPress={() => setMenuDetailVisible(true)} name='Chicken Dumplings' />
          <MealCard />
        </ScrollView>
        <TouchableOpacity onPress={() => setOrderScreenVisible(true)} activeOpacity={0.6} style={styles.orderContainer}>
          <Image style={styles.goldTick} source={require('../../assets/images/gold-tick.png')} />
          <Text style={styles.orderText}>Orders</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default Home;
