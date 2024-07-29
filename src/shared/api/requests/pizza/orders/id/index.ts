import { api } from '@/shared/api/instance';

export type PizzaOrderByIdParams = Pick<PizzaOrder, '_id'>;

export type PizzaOrderByIdConfig = AxiosRequestConfig<PizzaOrderByIdParams>;

export const getPizzaOrdersId = async ({ params, config }: PizzaOrderByIdConfig) =>
  // eslint-disable-next-line no-underscore-dangle
  api.get<PizzaOrderResponse>(`pizza/orders/${params._id}`, config);
