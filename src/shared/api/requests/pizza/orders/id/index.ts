import { api } from '@/shared/api/instance';

export type OrdersIdConfig = AxiosRequestConfig; // TODO: fix types

export const getOrdersId = async (requestConfig?: OrdersIdConfig) =>
  api.get<OrdersResponse>('pizza/orders/cancel', requestConfig?.config);
