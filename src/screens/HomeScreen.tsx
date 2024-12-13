import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import PricingSection from '../components/sections/PricingSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}