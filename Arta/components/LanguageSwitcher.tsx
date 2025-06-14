import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../constants/Colors';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={toggleLanguage}>
      <Text style={styles.text}>
        {i18n.language === 'ar' ? 'English' : 'عربي'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.pageBackground,
    padding: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}); 