import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, Image,
  ScrollView, TouchableOpacity
} from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';

const tabs = ['For Me', 'Categories'];
const categories = [
  { id: 'cars', icon: 'car' },
  { id: 'electronics', icon: 'mobile' },
  { id: 'clothes', icon: 'shopping-bag' },
  { id: 'furniture', icon: 'bed' },
];

const listings = [
  {
    id: 1,
    title: 'كيا مورنينج 1100 سي سي',
    time: 'منذ 4 ساعات',
    user: 'Wesam',
    location: 'صنعاء',
    image: 'https://via.placeholder.com/100',
  },
  {
    id: 2,
    title: 'هايلاندر وارد أمريكا',
    time: 'منذ 4 ساعات',
    user: 'Wesam',
    location: 'صنعاء',
    image: 'https://via.placeholder.com/100',
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('For Me');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.langSegmentedControl}>
          <TouchableOpacity
            style={[
              styles.langSegmentButton,
              i18n.language === 'ar' && styles.langSegmentButtonActive,
            ]}
            onPress={() => i18n.changeLanguage('ar')}
          >
            <Text style={styles.langText}>
              عربي
            </Text>
          </TouchableOpacity>
          <View style={styles.langSegmentDivider} />
          <TouchableOpacity
            style={[
              styles.langSegmentButton,
              i18n.language === 'en' && styles.langSegmentButtonActive,
            ]}
            onPress={() => i18n.changeLanguage('en')}
          >
            <Text style={styles.langText}>
              EN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topBar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tabButton,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text style={[
              styles.tabText,
              activeTab === tab && styles.activeTabText,
            ]}>
              {tab === 'For Me' ? t('tabs.forYou') : t('tabs.categories')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        {activeTab === 'For Me' && listings.map((item) => (
          <ListingCard key={item.id} {...item} />
        ))}

        {activeTab === 'Categories' && (
          <View style={styles.categories}>
            {categories.map((cat) => (
              <CategoryButton 
                key={cat.id} 
                label={t(`categories.${cat.id}`)}
                icon={cat.icon}
                onPress={() => router.push(`/explore?category=${encodeURIComponent(cat.id)}`)} 
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoryButton({ label, icon, onPress }: { label: string; icon: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.categoryBtn} onPress={onPress}>
      <FontAwesome name={icon as any} size={24} color={COLORS.white} style={styles.categoryIcon} />
      <Text style={styles.categoryText}>{label}</Text>
    </TouchableOpacity>
  );
}

function ListingCard({ title, time, user, location, image }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cardImage} />
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardMeta}>{time}</Text>
        <Text style={styles.cardMeta}>{user}</Text>
        <Text style={styles.cardLocation}>{location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackground,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  langSegmentedControl: {
    flexDirection: 'row',
    backgroundColor: COLORS.accent,
    borderRadius: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  langSegmentButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  langSegmentButtonActive: {
    backgroundColor: COLORS.primary,
  },
  langSegmentDivider: {
    width: 1,
    backgroundColor: COLORS.primary,
  },
  langText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: COLORS.surface,
    paddingVertical: 10,
    borderBottomColor: COLORS.divider,
    borderBottomWidth: 1,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: COLORS.primary,
  },
  tabText: {
    color: COLORS.mainText,
    fontWeight: 'bold',
  },
  activeTabText: {
    color: COLORS.white,
  },
  content: {
    padding: 15,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  categoryBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: {
    marginRight: 8,
  },
  categoryText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    marginBottom: 15,
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  cardDetails: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.mainText,
  },
  cardMeta: {
    color: COLORS.lightText,
    fontSize: 14,
  },
  cardLocation: {
    marginTop: 5,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightText + '30',
  },
});
