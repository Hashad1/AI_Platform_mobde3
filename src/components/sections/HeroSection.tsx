import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from '../../hooks/useTranslation';

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <View className="px-4 py-8 bg-gray-50">
      <Text className="text-3xl font-bold text-center mb-2">
        {t('hero.title')}
      </Text>
      <Text className="text-lg text-center text-gray-600 mb-6">
        {t('hero.subtitle')}
      </Text>
      <TouchableOpacity 
        className="bg-primary px-8 py-3 rounded-lg mx-auto"
        onPress={() => {}}
      >
        <Text className="text-white font-bold text-center">
          {t('hero.cta')}
        </Text>
      </TouchableOpacity>
    </View>
  );
}