"use client";

import { IPayloadLogin, IResponse } from "@/lib/models";
import { dbBrowser } from "@/lib/utils";

export const login = async (payload: IPayloadLogin): Promise<IResponse<undefined>> => {
  const supabase = dbBrowser();

  try {
    const { email, password } = payload;
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      return {
        code: "Error",
        message: error.message,
      };
    }

    return {
      code: "Success",
      message: "Login successful",
    };
  } catch (err) {
    console.error("[LOGIN_ERROR]", err);
    return { code: "Error", message: (err as Error).message };
  }
};
