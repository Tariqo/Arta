import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../constants/Colors';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>حسابي</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.subtitle}>إدارة حسابك وإعلاناتك</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: COLORS.lightText + '30',
  },
  text: {
    color: COLORS.lightText,
  },
}); 