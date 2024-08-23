import React from 'react';
import { clsx } from 'clsx';

import styles from './Button.module.css';

export type ButtonVariant = 'contained' | 'text' | 'outlined';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  loading?: boolean;
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'contained', children, className, loading, ...props }, ref) => {
    const classes = clsx(styles.button, styles[variant], { [styles.loading]: loading }, className);
    return (
      <button type='button' className={classes} {...props} ref={ref}>
        {loading && <span />}
        <span>{children}</span>
      </button>
    );
  }
);
