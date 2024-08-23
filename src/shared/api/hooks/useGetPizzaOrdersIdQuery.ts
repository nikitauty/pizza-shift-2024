import { useQuery } from '@tanstack/react-query';

import { getPizzaOrdersId, type PizzaOrderIdConfig } from '../requests/pizza/orders/id';

export const useGetPizzaOrdersIdQuery = (settings?: QuerySettings<PizzaOrderIdConfig>) => {
  useQuery({
    queryKey: ['getPizzaOrdersId', settings?.config, settings?.options],
    queryFn: () => getPizzaOrdersId({ config: settings?.config, params: settings?.config.params }),
    ...settings?.options,
  });
};
