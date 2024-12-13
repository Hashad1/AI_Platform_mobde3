import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { cn } from '@/utils/cn';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'caption';
}

export function Text({ variant = 'body', className, children, ...props }: TextProps) {
  return (
    <RNText
      className={cn(
        'text-gray-900',
        variant === 'h1' && 'text-4xl font-bold',
        variant === 'h2' && 'text-3xl font-bold',
        variant === 'h3' && 'text-2xl font-semibold',
        variant === 'body' && 'text-base',
        variant === 'caption' && 'text-sm text-gray-600',
        className
      )}
      {...props}
    >
      {children}
    </RNText>
  );
}