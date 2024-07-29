import { api } from '@/shared/api/instance';

export type OrdersConfig = AxiosRequestConfig;

export const getOrders = async ({ config }: OrdersConfig) =>
  api.get<PizzaOrdersResponse>('pizza/orders', config);
