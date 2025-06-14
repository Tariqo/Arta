import React, { useState } from 'react';
import {
  StyleSheet, SafeAreaView, Image,
  ScrollView, TouchableOpacity
} from 'react-native';
import { Text, View } from '@/components/Themed';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

const COLORS = {
  primary: '#2a9d8f',
  secondary: '#e76f51',
  background: '#f1f1f1',
  accent: '#264653',
  text: '#1d1d1d',
  lightText: '#6c757d',
  white: '#ffffff',
  redBackground: '#c0392b',
  redActive: '#e74c3c',
};

const tabs = ['For Me', 'Categories'];
const categories = ['سيارات', 'إلكترونيات', 'ملابس', 'أثاث'];

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
  const { i18n } = useTranslation();
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
              {tab}
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
                key={cat} 
                label={cat} 
                onPress={() => router.push(`/explore?category=${encodeURIComponent(cat)}`)} 
              />
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoryButton({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.categoryBtn} onPress={onPress}>
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
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
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
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    borderBottomColor: '#ddd',
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
    color: COLORS.text,
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
  },
  categoryText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
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
});
