import { api } from '@/shared/api/instance';

export type PizzaOrdersIdConfig = AxiosRequestConfig; // TODO: fix types

export const getOrdersId = async (id: string, requestConfig?: PizzaOrdersIdConfig) =>
  api.get<PizzaOrderResponse>(`pizza/orders/${id}`, requestConfig?.config);
