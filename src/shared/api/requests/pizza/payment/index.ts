import { api } from '@/shared/api/instance';

export type PizzaPaymentConfig = AxiosRequestConfig;

export const getPayment = async (requestConfig?: PizzaPaymentConfig) =>
  api.get<PizzaPaymentResponse>('pizza/payment', requestConfig?.config);
