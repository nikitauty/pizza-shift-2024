import { isMobile as mobile } from 'react-device-detect';

import { DesktopLayout } from './DesktopLayout/DesktopLayout';
import { MobileLayout } from './MobileLayout/MobileLayout';
import { LayoutLoader } from './LayoutLoader';

interface LayoutProps {
  loading?: boolean;
}

export const Layout = ({ loading }: LayoutProps) => {
  if (loading) return <LayoutLoader />;

  if (mobile) return <MobileLayout />;

  return <DesktopLayout />;
};
