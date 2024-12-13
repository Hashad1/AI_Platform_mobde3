import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { cn } from '@/utils/cn';

interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(
        'rounded-lg',
        variant === 'primary' ? 'bg-primary' : 'bg-white border border-primary',
        size === 'sm' ? 'px-4 py-2' : size === 'md' ? 'px-6 py-3' : 'px-8 py-4',
        className
      )}
      {...props}
    >
      <Text
        className={cn(
          'text-center font-bold',
          variant === 'primary' ? 'text-white' : 'text-primary'
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}