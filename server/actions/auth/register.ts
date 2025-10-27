"use server";

import { dbServer } from "@/lib/db/server";
import { IPayloadRegister, IResponse } from "@/lib/models";

export const Register = async (payload: IPayloadRegister): Promise<IResponse<undefined>> => {
  const supabase = await dbServer();
  try {
    const { data } = await supabase.auth.admin.listUsers();
    const existingUser = data.users.find((user) => user.email === payload.email);

    const { error, data: userData } = await supabase.auth.signUp({
      ...payload,
      options: {
        emailRedirectTo: `http://localhost:3000/api/auth/callback`,
        data: { display_name: payload.name, role: "Guest" },
      },
    });

    if (error) {
      return {
        code: "Error",
        message: error.message,
      };
    }

    if (existingUser) {
      return {
        code: "Duplicate",
        message: "Email already exists",
      };
    }

    await supabase.from("users").insert({ id: userData.user?.id, name: payload.name, email: payload.email });

    return {
      code: "Success",
      message: "Register successful",
    };
  } catch (err) {
    console.error("[REGISTER_ERROR]", { err });
    return { code: "Error", message: (err as Error).message };
  }
};
