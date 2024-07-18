import { api } from '@/shared/api/instance';

export type OrdersCancelConfig = AxiosRequestConfig; // TODO: fix types

export const getOrdersCancel = async (requestConfig?: OrdersCancelConfig) =>
  api.get<PizzaOrdersResponse>('pizza/orders/cancel', requestConfig?.config);
