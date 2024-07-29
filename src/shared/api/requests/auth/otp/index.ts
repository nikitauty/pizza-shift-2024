import { api } from '@api/instance';

export type PostOtpConfig = AxiosRequestConfig<CreateOtpDto>;

export const postOtp = async ({ params, config }: PostOtpConfig) =>
  api.post<CreateOtpResponse>('/otp', params, config);
