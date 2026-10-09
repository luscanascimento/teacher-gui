import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'red' | 'blue' | 'cream' | 'camel' | 'stamp';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'red',
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center text-xs font-semibold uppercase tracking-vintage px-3 py-1 rounded-full transition-colors';

  const variants = {
    red: 'bg-british-red/10 text-british-red border border-british-red/20',
    blue: 'bg-british-blue/10 text-british-blue border border-british-blue/20',
    cream: 'bg-british-cream/20 text-british-cream border border-british-cream/30',
    camel: 'bg-british-camel/20 text-british-camel-dark border border-british-camel/30',
    stamp:
      'border border-dashed border-british-camel text-british-blue bg-white/70 px-2.5 py-0.5 rounded-sm shadow-xs font-mono',
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
};
