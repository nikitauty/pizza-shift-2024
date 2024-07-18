import { api } from '@/shared/api/instance';

export type PaymentConfig = AxiosRequestConfig; // TODO: fix types

export const getPayment = async (requestConfig?: PaymentConfig) =>
  api.get<OrdersResponse>('pizza/orders/cancel', requestConfig?.config); // TODO: fix types
