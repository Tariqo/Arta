import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from './Themed';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  return (
    <TouchableOpacity style={styles.button} onPress={toggleLanguage}>
      <Text style={styles.text}>
        {i18n.language === 'ar' ? 'English' : 'عربي'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
}); 