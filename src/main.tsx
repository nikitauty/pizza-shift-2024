import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { getSession } from '@api/requests/users/session/index.ts';
import { useUserStore } from '@store/hooks/useUserStore.ts';

import { App } from './app/App.tsx';
import { TanStackQueryProvider } from './app/providers/TanStackQueryProvider';

import './app/styles/reset.css';
import './app/styles/variables/typography.css';
import './app/styles/global.css';

const init = async () => {
  const token = localStorage.getItem('token');

  if (token) {
    const getUserResponse = await getSession();
    useUserStore.setState({ isLoggedIn: true, user: getUserResponse.data.user });
  }

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      <TanStackQueryProvider>
        <App />
      </TanStackQueryProvider>
    </BrowserRouter>
  );
};

init();
