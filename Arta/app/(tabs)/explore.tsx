import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../constants/Colors';

import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';

export default function ExploreScreen() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('tabs.explore')}</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="app/(tabs)/explore.tsx" />
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
    color: COLORS.mainText,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    backgroundColor: COLORS.lightText + '30',
  },
});
