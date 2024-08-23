import { Navigate, useLocation } from 'react-router-dom';

import { getRouteAuth } from '@/shared/constants/router';
import { useUserStore } from '@/shared/store/hooks/useUserStore';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const { isLoggedIn } = useUserStore();
  const location = useLocation();

  console.log('@isLoggedIn', isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={getRouteAuth()} state={{ from: location }} replace />;
  }

  return children;
};
