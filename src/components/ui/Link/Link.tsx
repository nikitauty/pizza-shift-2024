import type { ReactNode } from 'react';
import type { LinkProps as ReactRouterDomLinkProps } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './Link.module.css';

interface LinkProps extends ReactRouterDomLinkProps {
  className?: string;
  children?: ReactNode;
  isActive?: boolean;
}

export const Link = ({ className, isActive, to, children, ...props }: LinkProps) => (
  <NavLink
    to={to}
    className={clsx(styles.link, { [styles.active]: isActive }, className)}
    {...props}
  >
    {children}
  </NavLink>
);
