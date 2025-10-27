import { IAuthLogin, IAuthRegister } from "../models";

export const DEF_USER_LOGIN: IAuthLogin = {
  email: "",
  password: "",
};

export const DEF_USER_REGISTER: IAuthRegister = {
  name: "",
  email: "",
  password: "",
};
