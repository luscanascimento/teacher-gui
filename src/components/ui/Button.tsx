import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'camel';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary:
        'bg-british-red text-british-cream hover:bg-british-red-dark focus-visible:ring-british-red shadow-editorial-red hover:shadow-lg',
      secondary:
        'bg-british-cream text-british-blue hover:bg-white focus-visible:ring-british-blue border border-british-blue/15 shadow-sm',
      outline:
        'bg-transparent text-british-cream border-2 border-british-cream/40 hover:bg-british-cream hover:text-british-blue focus-visible:ring-british-cream',
      ghost:
        'bg-transparent text-british-blue hover:bg-british-blue/5 focus-visible:ring-british-blue',
      camel:
        'bg-british-camel text-british-blue hover:bg-british-camel-light focus-visible:ring-british-camel shadow-sm',
    };

    const sizes = {
      sm: 'text-xs px-4 py-2 gap-1.5',
      md: 'text-sm px-6 py-3 gap-2',
      lg: 'text-base px-8 py-4 gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
