import { api } from '@/shared/api/instance';

export type OrdersCancelConfig = AxiosRequestConfig; // TODO: fix types

export const getOrdersCancel = async (requestConfig?: OrdersCancelConfig) =>
  api.get<OrdersResponse>('pizza/orders/cancel', requestConfig?.config);
