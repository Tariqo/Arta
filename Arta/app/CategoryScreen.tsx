import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../constants/Colors';

const categories = [
  { name: 'Women', icon: 'body-outline' },
  { name: 'Men', icon: 'body-outline' },
  { name: 'Kids', icon: 'happy-outline' },
  { name: 'Home', icon: 'home-outline' },
  { name: 'Electronics', icon: 'hardware-chip-outline' },
  { name: 'Entertainment', icon: 'game-controller-outline' },
  { name: 'Sports', icon: 'tennisball-outline', new: true },
  { name: 'Pet care', icon: 'paw-outline' },
];

const CategoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Category</Text>
        <View style={styles.headerButton} />{/* Placeholder for alignment */}
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.lightText} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Q Find a category"
          placeholderTextColor={COLORS.lightText}
        />
      </View>

      <ScrollView style={styles.scrollViewContent}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.listItem}>
            <View style={styles.categoryInfo}>
              <Ionicons name={category.icon as any} size={24} color={COLORS.mainText} />
              <Text style={styles.listItemText}>{category.name}</Text>
            </View>
            {category.new && <Text style={styles.newTag}>New</Text>}
            <Ionicons name="chevron-forward" size={24} color={COLORS.lightText} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackground,
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    borderRadius: 8,
    margin: 16,
    paddingHorizontal: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: COLORS.mainText,
    paddingVertical: 10,
    fontSize: 16,
  },
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  categoryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemText: {
    color: COLORS.mainText,
    fontSize: 16,
    marginLeft: 15,
  },
  newTag: {
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 10,
  },
  categoryItem: {
    backgroundColor: COLORS.surface,
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  categoryText: {
    color: COLORS.mainText,
    fontSize: 16,
    fontWeight: '600',
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default CategoryScreen; 