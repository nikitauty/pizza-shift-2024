import { api } from '@/shared/api/instance';

export type OrdersCancelConfig = AxiosRequestConfig<CancelPizzaOrderDto>;

export const getOrdersCancel = async ({ params, config }: OrdersCancelConfig) =>
  api.put<PizzaOrdersResponse>('pizza/orders/cancel', params, config);
