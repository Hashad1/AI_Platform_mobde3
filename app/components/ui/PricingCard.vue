<template>
  <StackLayout class="pricing-card p-4 mb-4 bg-white rounded-lg">
    <Label :text="title" class="text-xl font-bold mb-2" />
    <Label :text="'$' + price" class="text-2xl font-bold text-primary mb-2" />
    <Label :text="description" class="mb-4" />
    <Button 
      text="اختر الباقة" 
      class="bg-primary text-white py-2 rounded-lg"
      @tap="$emit('select')"
    />
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class PricingCard extends Vue {
  @Prop() title!: string;
  @Prop() price!: number;
  @Prop() description!: string;
}
</script>

<style lang="scss" scoped>
.pricing-card {
  border-width: 1;
  border-color: #e2e8f0;
}
</style>