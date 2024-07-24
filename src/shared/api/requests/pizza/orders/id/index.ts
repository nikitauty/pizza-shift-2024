import { api } from '@/shared/api/instance';

export type PizzaOrdersIdParams = Pick<PizzaOrder, 'id'>;

export type PizzaOrdersIdConfig = AxiosRequestConfig<PizzaOrdersIdParams>;

export const getOrdersId = async (requestConfig?: PizzaOrdersIdConfig) =>
  api.get<PizzaOrderResponse>(`pizza/orders/${requestConfig?.params.id}`, requestConfig?.config);
