"use server";

import { dbServer } from "@/lib/db/server";
import { IPayloadLogin, IResponse } from "@/lib/models";

export const Login = async (payload: IPayloadLogin): Promise<IResponse<undefined>> => {
  const supabase = await dbServer();
  try {
    const { error } = await supabase.auth.signInWithPassword({ ...payload });

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
    console.error("[LOGIN_ERROR]", { err });
    return { code: "Error", message: (err as Error).message };
  }
};
