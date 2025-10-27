"use client";

import { IPayloadRegister, IResponse } from "@/lib/models";
import { dbBrowser } from "@/lib/utils";

export const register = async (payload: IPayloadRegister): Promise<IResponse<undefined>> => {
  const supabase = dbBrowser();

  try {
    const { error } = await supabase.auth.signUp({
      ...payload,
      options: {
        emailRedirectTo: `http://localhost:3000/api/auth/callback`,
      },
    });

    if (error) {
      return {
        code: "Error",
        message: error.message,
      };
    }

    return {
      code: "Success",
      message: "Register successful",
    };
  } catch (err) {
    console.error("[REGISTER_ERROR]", err);
    return { code: "Error", message: (err as Error).message };
  }
};
