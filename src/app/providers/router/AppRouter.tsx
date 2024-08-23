import { Route, Routes } from 'react-router-dom';

import { routerConfig } from './config/routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
        />
      ))}
      ;
    </Routes>
  );
};
