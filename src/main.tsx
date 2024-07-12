import ReactDOM from 'react-dom/client';

import { App } from './app/App.tsx';

import './app/styles/reset.css';
import './app/styles/variables/typography.css';
import './app/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
