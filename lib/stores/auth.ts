import { create } from "zustand";
import { IAuthLogin, IAuthRegister, IValidation } from "../models";
import { DEF_USER_LOGIN, DEF_USER_REGISTER } from "../data";
import { ZodAuthLogin, ZodAuthRegister } from "../zod";

interface IStoreAuthState {
  authLogin: IAuthLogin;
  authRegister: IAuthRegister;
  authLoginErrors: Record<string, string>;
  authRegisterErrors: Record<string, string>;
  setAuthRegisterField: <K extends keyof IAuthRegister>(field: K, value: IAuthRegister[K]) => void;
  setAuthLoginField: <K extends keyof IAuthLogin>(field: K, value: IAuthLogin[K]) => void;
  resetLogin: () => void;
  resetRegister: () => void;
  validateUserLogin: () => IValidation;
  validateUserRegister: () => IValidation;
}

export const useStoreAuth = create<IStoreAuthState>((set, get) => ({
  authLogin: { ...DEF_USER_LOGIN },
  authRegister: { ...DEF_USER_REGISTER },
  authLoginErrors: {},
  authRegisterErrors: {},

  resetLogin: () => set({ authLogin: { ...DEF_USER_LOGIN } }),
  resetRegister: () => set({ authRegister: { ...DEF_USER_REGISTER } }),
  setAuthLoginField: (field, value) =>
    set((state) => ({
      authLogin: { ...state.authLogin, [field]: value },
      authLoginErrors: { ...state.authLoginErrors, [field]: "" },
    })),

  setAuthRegisterField: (field, value) =>
    set((state) => ({
      authRegister: { ...state.authRegister, [field]: value },
      authRegisterErrors: { ...state.authRegisterErrors, [field]: "" },
    })),

  validateUserLogin: (): IValidation => {
    const { authLogin } = get();

    set({ authLoginErrors: {} });
    const result = ZodAuthLogin.safeParse(authLogin);

    if (!result.success) {
      const errors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (field && !errors[field.toString()]) {
          errors[field.toString()] = issue.message;
        }
      });

      set({ authLoginErrors: errors });
      return { success: false, errors };
    }

    return { success: true, errors: {} };
  },

  validateUserRegister: (): IValidation => {
    const { authRegister } = get();

    set({ authRegisterErrors: {} });
    const result = ZodAuthRegister.safeParse(authRegister);

    if (!result.success) {
      const errors: Record<string, string> = {};

      result.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (field && !errors[field.toString()]) {
          errors[field.toString()] = issue.message;
        }
      });

      set({ authRegisterErrors: errors });
      return { success: false, errors };
    }

    return { success: true, errors: {} };
  },
}));
