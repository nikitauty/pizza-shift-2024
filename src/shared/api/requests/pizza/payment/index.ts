import { api } from '@/shared/api/instance';

export type PizzaPaymentConfig = AxiosRequestConfig<CreatePizzaPaymentDto>;

export const postPizzaPayment = async ({ params, config }: PizzaPaymentConfig) =>
  api.post<PizzaPaymentResponse>('pizza/payment', params, config);
