<template>
  <StackLayout class="contact-section p-4">
    <Label text="تواصل معنا" class="text-2xl font-bold text-center mb-4" />
    <TextField 
      v-model="email"
      hint="البريد الإلكتروني" 
      class="input mb-2 p-4 rounded-lg"
    />
    <TextField 
      v-model="message"
      hint="الرسالة" 
      class="input mb-4 p-4 rounded-lg"
    />
    <Button 
      text="إرسال" 
      class="bg-primary text-white py-3 rounded-lg"
      @tap="onSubmit"
    />
  </StackLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ContactSection extends Vue {
  email = '';
  message = '';

  onSubmit() {
    this.$emit('submit', { email: this.email, message: this.message });
    this.email = '';
    this.message = '';
  }
}
</script>

<style lang="scss" scoped>
.input {
  background-color: #f8fafc;
  border-width: 1;
  border-color: #e2e8f0;
}
</style>