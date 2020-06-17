import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import backIcon from '../../assets/images/back-icon.png';
import styles from './styles';

const ResetCode = () => {
  const navigation = useNavigation();

  const CELL_COUNT = 6;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} activeOpacity={0.7}>
          <Image style={styles.backIcon} source={backIcon} />
        </TouchableOpacity>
        <Text style={styles.header}>reset{"\n"}code.</Text>
        <View style={styles.instructionsContainer}>
          <Text style={styles.instructions}>
            Just to be sure it is you, please enter the 6- digit code sent to
            your registered email address or phone number
        </Text>
        </View>
        <View style={styles.codeContainer}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                onLayout={getCellOnLayoutHandler(index)}
                key={index}
                style={styles.cellRoot}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResetCode;
