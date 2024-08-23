import { api } from '@/shared/api/instance';

type GetSessionConfig = AxiosRequestConfig;

export const getSession = async (requestConfig?: GetSessionConfig) =>
  api.get<SessionResponse>('users/session', requestConfig?.config);
