import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { COLORS } from '../../constants/Colors';

export default function CreateScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  const navigateToCategory = () => {
    router.push('/CategoryScreen');
  };

  const navigateToPrice = () => {
    router.push('/PriceInputScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('create.title')}</Text>
        <View style={styles.headerButton} />
      </View>

      <ScrollView style={styles.scrollViewContent}>
        <TouchableOpacity style={styles.uploadPhotosButton}>
          <Ionicons name="add-circle-outline" size={24} color={COLORS.white} />
          <Text style={styles.uploadPhotosText}>{t('create.uploadPhotos')}</Text>
        </TouchableOpacity>

        <View style={styles.infoBox}>
          <Ionicons name="camera-outline" size={20} color={COLORS.lightText} />
          <Text style={styles.infoText}>{t('create.photoTip')}</Text>
          <TouchableOpacity>
            <Text style={styles.learnHowText}>{t('create.learnHow')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>{t('create.titleLabel')}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={t('create.titlePlaceholder')}
            placeholderTextColor={COLORS.lightText}
          />
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>{t('create.descLabel')}</Text>
          <TextInput
            style={[styles.textInput, styles.descriptionInput]}
            placeholder={t('create.descPlaceholder')}
            placeholderTextColor={COLORS.lightText}
            multiline
          />
        </View>

        <TouchableOpacity style={styles.listItem} onPress={navigateToCategory}>
          <Text style={styles.listItemText}>{t('create.category')}</Text>
          <Ionicons name="chevron-forward" size={24} color={COLORS.accent} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} onPress={navigateToPrice}>
          <Text style={styles.listItemText}>{t('create.price')}</Text>
          <Ionicons name="chevron-forward" size={24} color={COLORS.accent} />
        </TouchableOpacity>

        <View style={styles.feedbackSection}>
          <Text style={styles.feedbackText}>{t('create.uploadFeedback')}</Text>
          <TouchableOpacity style={styles.feedbackButton}>
            <Text style={styles.feedbackButtonText}>{t('create.giveFeedback')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  headerButton: {
    padding: 8,
  },
  headerTitle: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollViewContent: {
    flex: 1,
    padding: 16,
  },
  uploadPhotosButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  uploadPhotosText: {
    color: COLORS.white,
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.accent + '11', // light accent bg
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoText: {
    color: COLORS.mainText,
    flex: 1,
    marginLeft: 8,
  },
  learnHowText: {
    color: COLORS.primary,
    marginLeft: 8,
    fontWeight: '500',
  },
  inputSection: {
    marginBottom: 20,
  },
  inputLabel: {
    color: COLORS.accent,
    fontSize: 16,
    marginBottom: 8,
    fontWeight: '600',
  },
  textInput: {
    backgroundColor: COLORS.surface,
    color: COLORS.mainText,
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  descriptionInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.divider,
  },
  listItemText: {
    color: COLORS.mainText,
    fontSize: 16,
    fontWeight: '600',
  },
  feedbackSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 100,
  },
  feedbackText: {
    color: COLORS.lightText,
    fontSize: 14,
  },
  feedbackButton: {
    backgroundColor: COLORS.accent,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  feedbackButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '600',
  },
});
