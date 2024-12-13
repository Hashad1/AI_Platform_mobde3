<template>
  <Page>
    <ActionBar title="Mobda" flat="true">
      <NavigationButton visibility="collapsed" />
    </ActionBar>
    
    <ScrollView>
      <StackLayout>
        <HeroSection @start="onStartNow" />
        <FeaturesSection />
        <PricingSection @select-plan="onSelectPlan" />
        <ContactSection @submit="onContactSubmit" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HeroSection from './sections/HeroSection.vue';
import FeaturesSection from './sections/FeaturesSection.vue';
import PricingSection from './sections/PricingSection.vue';
import ContactSection from './sections/ContactSection.vue';

@Component({
  components: {
    HeroSection,
    FeaturesSection,
    PricingSection,
    ContactSection
  }
})
export default class Home extends Vue {
  onStartNow() {
    console.log('Start Now tapped');
  }

  onSelectPlan(plan: any) {
    console.log('Selected plan:', plan);
  }

  onContactSubmit(data: { email: string; message: string }) {
    console.log('Contact form submitted:', data);
  }
}
</script>