import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../constants/Colors';

const PriceInputScreen = () => {
  const [price, setPrice] = useState('0');

  const handleKeyPress = (key: string) => {
    if (key === 'back') {
      setPrice(prevPrice => {
        if (prevPrice.length === 1 && prevPrice !== '0') {
          return '0';
        } else if (prevPrice.length === 1 && prevPrice === '0') {
          return '0';
        }
        return prevPrice.slice(0, -1) || '0';
      });
    } else if (key === ',') {
      setPrice(prevPrice => {
        if (!prevPrice.includes('.')) {
          return prevPrice + '.';
        }
        return prevPrice;
      });
    } else {
      setPrice(prevPrice => {
        if (prevPrice === '0' && key !== ',') {
          return key;
        }
        // Prevent more than two decimal places
        if (prevPrice.includes('.') && prevPrice.split('.')[1].length >= 2) {
          return prevPrice;
        }
        return prevPrice + key;
      });
    }
  };

  const formatPrice = (value: string) => {
    if (value === '') return '0';

    let [integerPart, decimalPart] = value.split('.');

    if (decimalPart === undefined) {
      decimalPart = '';
    }

    // Remove leading zeros that are not part of a decimal (e.g., '05' becomes '5', but '0.5' stays '0.5')
    if (integerPart.length > 1 && integerPart.startsWith('0')) {
      integerPart = integerPart.substring(1);
    }
    if (integerPart === '') {
      integerPart = '0';
    }

    if (decimalPart.length > 2) {
      decimalPart = decimalPart.substring(0, 2);
    }

    return decimalPart ? `${integerPart}.${decimalPart}` : integerPart;
  };

  const renderKeypadButton = (key: string) => (
    <TouchableOpacity style={styles.keypadButton} onPress={() => handleKeyPress(key)}>
      <Text style={styles.keypadButtonText}>{key === 'back' ? <Ionicons name="backspace-outline" size={28} color={COLORS.white} /> : key}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Price</Text>
        <View style={styles.headerButton} />
      </View>

      <View style={styles.priceInputContainer}>
        <TextInput
          style={styles.priceInput}
          value={formatPrice(price)}
          editable={false}
        />
      </View>

      <View style={styles.keypadContainer}>
        <View style={styles.keypadRow}>
          {renderKeypadButton('1')}
          {renderKeypadButton('2')}
          {renderKeypadButton('3')}
        </View>
        <View style={styles.keypadRow}>
          {renderKeypadButton('4')}
          {renderKeypadButton('5')}
          {renderKeypadButton('6')}
        </View>
        <View style={styles.keypadRow}>
          {renderKeypadButton('7')}
          {renderKeypadButton('8')}
          {renderKeypadButton('9')}
        </View>
        <View style={styles.keypadRow}>
          {renderKeypadButton(',')}
          {renderKeypadButton('0')}
          {renderKeypadButton('back')}
        </View>
      </View>

      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackground,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 40,
    backgroundColor: COLORS.accent,
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  priceInput: {
    color: COLORS.mainText,
    fontSize: 48,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightText,
    flex: 1,
    textAlign: 'center',
    backgroundColor: COLORS.surface,
  },
  keypadContainer: {
    backgroundColor: COLORS.accent,
    paddingVertical: 10,
  },
  keypadRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  keypadButton: {
    backgroundColor: COLORS.primary,
    width: 80,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keypadButtonText: {
    color: COLORS.white,
    fontSize: 28,
  },
  doneButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  doneButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PriceInputScreen; 