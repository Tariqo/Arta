import { StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const COLORS = {
  primary: '#004e64',
  secondary: '#ff6b6b',
  background: '#f9f9f9',
  accent: '#00a896',
  text: '#222',
  lightText: '#777',
  white: '#fff',
};

export default function HomeScreen() {
  const router = useRouter();

  const categories = ['سيارات', 'إلكترونيات', 'ملابس', 'أثاث'];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>

        {/* App Name Bar */}
        <View style={styles.appTitleBar}>
          <Text style={styles.appTitle}>عرطة</Text>
        </View>

        {/* Language and Login */}
        <View style={styles.languageLoginSection}>
          <View style={styles.languageToggle}>
            <Text style={styles.languageButtonActive}>عربي</Text>
            <Text style={styles.languageButton}>Eng</Text>
          </View>
          <Text style={styles.loginText}>دخول</Text>
          <FontAwesome name="arrow-left" size={16} color="white" />
        </View>

        {/* Search */}
        <View style={styles.searchBarContainer}>
          <TouchableOpacity style={styles.searchIconContainer}>
            <FontAwesome name="search" size={20} color="white" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="إبحث عن سلعة......"
            placeholderTextColor="#888"
          />
        </View>

        {/* Add Ad Button */}
        <TouchableOpacity style={styles.addAdButton}>
          <Text style={styles.addAdButtonText}>أضف إعلانك +</Text>
        </TouchableOpacity>

        {/* Categories */}
        <View style={styles.categoriesContainer}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={styles.categoryButton}
              onPress={() => router.push(`/explore?category=${encodeURIComponent(cat)}`)}
            >
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Listings */}
        <View style={styles.listingsContainer}>
          <Text style={styles.listingsTitle}>أحدث الإعلانات</Text>

          <View style={styles.listingItem}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.listingImage} />
            <View style={styles.listingDetails}>
              <Text style={styles.listingTitle}>كيا مورنينج 1100 سي سي</Text>
              <Text style={styles.listingInfo}>منذ 4 ساعات</Text>
              <Text style={styles.listingInfo}>Wesam</Text>
              <Text style={styles.listingLocation}>صنعاء</Text>
            </View>
          </View>

          <View style={styles.listingItem}>
            <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.listingImage} />
            <View style={styles.listingDetails}>
              <Text style={styles.listingTitle}>هايلاندر وارد أمريكا</Text>
              <Text style={styles.listingInfo}>منذ 4 ساعات</Text>
              <Text style={styles.listingInfo}>Wesam</Text>
              <Text style={styles.listingLocation}>صنعاء</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  appTitleBar: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    alignItems: 'center',
  },
  appTitle: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: 'bold',
  },
  languageLoginSection: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  languageToggle: {
    flexDirection: 'row',
    backgroundColor: '#003c50',
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
  },
  languageButton: {
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  languageButtonActive: {
    backgroundColor: COLORS.secondary,
    color: 'white',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  loginText: {
    color: 'white',
    marginRight: 5,
    fontSize: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    alignItems: 'center',
    elevation: 2,
  },
  searchIconContainer: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    textAlign: 'right',
  },
  addAdButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  addAdButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    margin: 10,
    elevation: 3,
  },
  categoryButton: {
    backgroundColor: COLORS.accent,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 5,
  },
  categoryText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  listingsContainer: {
    backgroundColor: COLORS.white,
    marginHorizontal: 15,
    marginTop: 10,
    borderRadius: 5,
    padding: 15,
  },
  listingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listingItem: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10,
  },
  listingImage: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  listingDetails: {
    flex: 1,
  },
  listingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  listingInfo: {
    fontSize: 14,
    color: COLORS.lightText,
  },
  listingLocation: {
    fontSize: 14,
    color: COLORS.lightText,
    marginTop: 5,
  },
});
