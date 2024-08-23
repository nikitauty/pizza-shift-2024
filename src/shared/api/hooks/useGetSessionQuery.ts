import { useQuery } from '@tanstack/react-query';

import { getSession } from '../requests/users/session';

export const useGetSessionQuery = (settings?: QuerySettings<typeof getSession>) =>
  useQuery({
    queryKey: ['getSession', settings?.config],
    queryFn: () => {
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token');
      }

      return getSession({ config: settings?.config });
    },
    ...settings?.options,
  });
