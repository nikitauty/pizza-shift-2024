import { api } from '@/shared/api/instance';

export type PizzaOrderIdParams = { id: string };

export type PizzaOrderIdConfig = AxiosRequestConfig<PizzaOrderIdParams>;

export const getPizzaOrdersId = async ({ params, config }: PizzaOrderIdConfig) =>
  // eslint-disable-next-line no-underscore-dangle
  api.get<PizzaOrderResponse>(`pizza/orders/${params.id}`, config);
