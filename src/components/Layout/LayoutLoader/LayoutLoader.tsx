import { Loader } from '@/components/ui/Loader/Loader';

import styles from './LayoutLoader.module.css';

export const LayoutLoader = () => (
  <div className={styles.app_loader_layout}>
    <Loader />
  </div>
);
