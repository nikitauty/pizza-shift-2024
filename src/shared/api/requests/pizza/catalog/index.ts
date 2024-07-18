import { api } from '@/shared/api/instance';

export type GetPizzaCatalogConfig = AxiosRequestConfig;

export const getPizzaCatalog = async (requestConfig?: GetPizzaCatalogConfig) =>
  api.get<PizzaCatalogResponse>('pizza/catalog', requestConfig?.config);
