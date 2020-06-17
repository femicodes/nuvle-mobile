import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNModal from 'react-native-modal';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import styles from './styles';

const CouponCode = ({ isVisible, closeModal }) => {
  const CELL_COUNT = 5;

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <RNModal onBackdropPress={closeModal} isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Enter Code</Text>
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
        <TouchableOpacity activeOpacity={0.7} style={styles.applyCode}>
          <Text style={styles.applyCodeText}>Apply Code</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeModal} activeOpacity={0.7} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </RNModal>
  );
};

export default CouponCode;
