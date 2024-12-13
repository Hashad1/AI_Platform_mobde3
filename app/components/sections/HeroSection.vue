<template>
  <GridLayout rows="auto" class="hero-section p-4">
    <StackLayout>
      <Label 
        text="تطوير تطبيقات الجوال بسهولة" 
        class="text-3xl font-bold text-center mb-2"
      />
      <Label 
        text="نساعدك في تحويل فكرتك إلى تطبيق جوال متميز" 
        class="text-lg text-center text-gray-600 mb-4"
      />
      <Button 
        text="ابدأ الآن" 
        class="bg-primary text-white font-bold py-3 px-6 rounded-lg"
        @tap="$emit('start')"
      />
    </StackLayout>
  </GridLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class HeroSection extends Vue {}
</script>

<style lang="scss" scoped>
.hero-section {
  background-color: #f8fafc;
  padding: 20;
}
</style>