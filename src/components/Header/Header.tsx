import { useLocation } from 'react-router-dom';
import { AppLogo, Button, Link, Typography } from '@components/ui';
import { AUTH_TOKEN } from '@constants/localstorage.ts';
import { getRouteAuth, getRouteMain, getRouteOrders, getRouteProfile } from '@constants/router';
import { useUserStore } from '@store/hooks/useUserStore';

import { ExitIcon } from '@/shared/assets/icons/ExitIcon';
import { TimeIcon } from '@/shared/assets/icons/TimeIcon';
import { UserIcon } from '@/shared/assets/icons/UserIcon';

import styles from './Header.module.css';

interface HeaderProps {
  mobile?: boolean;
}

export const Header = ({ mobile }: HeaderProps) => {
  const location = useLocation();

  const { isLoggedIn } = useUserStore();
  const { clearUser } = useUserStore();

  const onLogout = () => {
    clearUser();
    localStorage.removeItem(AUTH_TOKEN);
  };

  if (mobile) {
    return null; // TODO: make mobile header
  }

  return (
    <div className={styles.desktop_header}>
      <Link to={getRouteMain()}>
        <AppLogo className={styles.app_logo} />
      </Link>
      {isLoggedIn ? (
        <>
          <div className={styles.navbar}>
            <Link
              isActive={location.pathname === getRouteProfile()}
              className={styles.link}
              to={getRouteProfile()}
            >
              <UserIcon className={styles.link_icon} />
              <Typography variant='paragraph16_regular'>Профиль</Typography>
            </Link>
            <Link
              isActive={location.pathname === getRouteOrders()}
              className={styles.link}
              to={getRouteOrders()}
            >
              <TimeIcon className={styles.link_icon} />
              <Typography variant='paragraph16_regular'>История</Typography>
            </Link>
          </div>
          <Button className={styles.exit_button} onClick={onLogout} variant='contained'>
            <ExitIcon className={styles.button_icon} />
            <Typography variant='paragraph16_regular'>Выйти</Typography>
          </Button>
        </>
      ) : (
        <Link to={getRouteAuth()}>
          <Typography variant='paragraph16_regular'>Войти</Typography>
        </Link>
      )}
    </div>
  );
};
