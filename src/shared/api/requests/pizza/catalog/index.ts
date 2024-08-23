import { api } from '@/shared/api/instance';

export type GetPizzaCatalogConfig = AxiosRequestConfig;

export const getPizzaCatalog = (requestConfig?: GetPizzaCatalogConfig) =>
  api.get<PizzasResponse>('pizza/catalog', requestConfig?.config);
