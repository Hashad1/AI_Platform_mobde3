<template>
  <StackLayout class="features-section p-4">
    <Label text="مميزاتنا" class="text-2xl font-bold text-center mb-4" />
    
    <GridLayout rows="auto, auto" columns="*, *" class="gap-4">
      <FeatureCard
        v-for="(feature, index) in features"
        :key="feature.title"
        :row="Math.floor(index / 2)"
        :col="index % 2"
        v-bind="feature"
      />
    </GridLayout>
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FeatureCard from '../ui/FeatureCard.vue';

@Component({
  components: {
    FeatureCard
  }
})
export default class FeaturesSection extends Vue {
  features = [
    {
      title: "تصميم عصري",
      description: "تصاميم جذابة تناسب جميع الأذواق"
    },
    {
      title: "أداء عالي",
      description: "سرعة وكفاءة في التشغيل"
    },
    {
      title: "دعم فني",
      description: "دعم متواصل على مدار الساعة"
    },
    {
      title: "تحديثات مستمرة",
      description: "تطوير مستمر لتطبيقك"
    }
  ];
}
</script>