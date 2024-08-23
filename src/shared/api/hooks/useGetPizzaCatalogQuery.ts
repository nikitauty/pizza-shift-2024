import { useQuery } from '@tanstack/react-query';

import { getPizzaCatalog } from '../requests';

export const useGetPizzaCatalogQuery = (settings?: QuerySettings<typeof getPizzaCatalog>) =>
  useQuery({
    queryKey: ['getPizzaCatalog', settings?.config],
    queryFn: () => getPizzaCatalog({ config: settings?.config }),
    ...settings?.options,
  });
