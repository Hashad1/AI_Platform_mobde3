import { Application } from '@nativescript/core';

export function setupTheme() {
  // Enable RTL layout
  Application.getRootView().style.flexDirection = 'row-reverse';
}

export const colors = {
  primary: '#0ea5e9',
  secondary: '#64748b',
  background: '#ffffff',
  text: '#1e293b',
  border: '#e2e8f0'
};