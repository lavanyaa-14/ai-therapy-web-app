'use client';

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'icon'| 'lg';
  asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const variantClass =
      variant === 'outline'
        ? 'border border-input bg-transparent hover:bg-accent'
        : variant === 'ghost'
        ? 'bg-transparent hover:bg-accent'
        : 'bg-primary text-primary-foreground hover:opacity-90';

    const sizeClass = size === 'icon' ? 'h-9 w-9 p-0' : 'px-4 py-2';

    const Comp: any = asChild ? Slot : 'button';

    return (
      <Comp
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none ${variantClass} ${sizeClass} ${className}`}
        suppressHydrationWarning={true}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';


