<template>
  <button
    :text="text"
    :class="['btn', variant === 'primary' ? 'btn-primary' : 'btn-secondary']"
    @tap="$emit('tap')"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: 'primary' }) variant!: 'primary' | 'secondary';
  @Prop({ required: true }) text!: string;
}
</script>

<style lang="scss" scoped>
.btn {
  border-radius: 8;
  padding: 12 24;
  font-weight: bold;
  
  &-primary {
    background-color: var(--primary);
    color: white;
  }
  
  &-secondary {
    background-color: transparent;
    border-width: 1;
    border-color: var(--primary);
    color: var(--primary);
  }
}
</style>