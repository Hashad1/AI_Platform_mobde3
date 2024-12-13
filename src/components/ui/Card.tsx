import React from 'react';
import { View, ViewProps } from 'react-native';
import { cn } from '../../utils/cn';

interface CardProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <View 
      className={cn("bg-white p-4 rounded-lg shadow-sm", className)}
      {...props}
    >
      {children}
    </View>
  );
}