import { useLocation } from 'react-router-dom';
import { Header } from '@components/Header/Header';
import clsx from 'clsx';

import { AppRouter } from '@/app/providers/router';

import styles from './DesktopLayout.module.css';

export const DesktopLayout = () => {
  const location = useLocation();
  return (
    <div className={clsx(styles.desktop_layout, { [styles.main_page]: location.pathname === '/' })}>
      <Header />
      <div className={styles.content}>
        <AppRouter />
      </div>
    </div>
  );
};
