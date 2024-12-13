import { Frame } from '@nativescript/core';

export function navigate(page: string, context?: any) {
  Frame.topmost().navigate({
    moduleName: `views/${page}`,
    context
  });
}

export function goBack() {
  Frame.topmost().goBack();
}