import clsx from 'clsx';

import styles from './Loader.module.css';

type LoaderProps = {
  className?: string;
};

export const Loader = ({ className }: LoaderProps) => (
  <div className={clsx(styles.loader, className)} />
);
