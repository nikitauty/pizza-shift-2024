import { Suspense } from 'react';

import { Layout } from '@/components/Layout/Layout';
import { LayoutLoader } from '@/components/Layout/LayoutLoader';

export const App = () => {
  return (
    <div id='app' className='app'>
      <Suspense fallback={<LayoutLoader />}>
        <Layout />
      </Suspense>
    </div>
  );
};
