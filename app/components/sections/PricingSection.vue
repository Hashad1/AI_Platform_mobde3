<template>
  <StackLayout class="pricing-section p-4 bg-gray-50">
    <Label text="الباقات" class="text-2xl font-bold text-center mb-4" />
    
    <StackLayout class="pricing-cards">
      <PricingCard
        v-for="plan in plans"
        :key="plan.title"
        v-bind="plan"
        @select="onSelectPlan(plan)"
      />
    </StackLayout>
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PricingCard from '../ui/PricingCard.vue';

@Component({
  components: {
    PricingCard
  }
})
export default class PricingSection extends Vue {
  plans = [
    {
      title: "الباقة الأساسية",
      price: 999,
      description: "مناسبة للمشاريع الصغيرة"
    },
    {
      title: "الباقة المتقدمة",
      price: 1999,
      description: "مناسبة للشركات المتوسطة"
    }
  ];

  onSelectPlan(plan: any) {
    this.$emit('select-plan', plan);
  }
}
</script>