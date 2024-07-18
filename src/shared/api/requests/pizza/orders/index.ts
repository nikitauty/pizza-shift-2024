import { api } from '@/shared/api/instance';

export type OrdersConfig = AxiosRequestConfig;

export const getOrders = async (requestConfig?: OrdersConfig) =>
  api.get<OrdersResponse>('pizza/orders', requestConfig?.config);
