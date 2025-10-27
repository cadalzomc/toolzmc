"use client";

import { IResponse } from "@/lib/models";
import { dbBrowser } from "@/lib/utils";

export const logout = async (): Promise<IResponse<undefined>> => {
  const supabase = dbBrowser();

  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return {
        code: "Error",
        message: error.message,
      };
    }

    return {
      code: "Success",
      message: "Logout successful",
    };
  } catch (err) {
    console.error("[LOGOUT_ERROR]", err);
    return { code: "Error", message: (err as Error).message };
  }
};
