<template>
  <StackLayout class="feature-card p-4">
    <Label :text="title" class="font-bold mb-2" />
    <Label :text="description" textWrap="true" />
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class FeatureCard extends Vue {
  @Prop() title!: string;
  @Prop() description!: string;
}
</script>

<style lang="scss" scoped>
.feature-card {
  background-color: white;
  border-radius: 8;
  elevation: 2;
  margin: 5;
}
</style>