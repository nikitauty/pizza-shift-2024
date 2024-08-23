import { api } from '@api/instance';

export type SignInParams = Pick<User, 'phone'>;

export type SignInConfig = AxiosRequestConfig<SignInParams>;

export const postUsersSignIn = async ({ params, config }: SignInConfig) =>
  api.post<SignInResponse>('users/signIn', params, config);
