import request from '@/utils/request';
import { loginForm, loginResponseData, userResponseData } from './type';

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_url = '/user/info',
}

export const reqLogin = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data);
};

export const reqUserInfo = () => {
  return request.get<any, userResponseData>(API.USERINFO_url);
};
