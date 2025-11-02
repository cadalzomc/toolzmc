"use server";

import { IPayloadRegister, IResponse } from "@/lib/models";
import { db, supabaseServer } from "@/server/db";
import { profiles } from "@/server/db/schema";

export const Register = async (payload: IPayloadRegister): Promise<IResponse<undefined>> => {
  const supabase = await supabaseServer();
  const APP_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/";
  try {
    const { data } = await supabase.auth.admin.listUsers();
    const existingUser = data.users.find((user) => user.email === payload.email);

    if (existingUser) {
      return {
        code: "Duplicate",
        message: "Email already exists",
      };
    }

    const { error, data: userData } = await supabase.auth.signUp({
      ...payload,
      options: {
        emailRedirectTo: `${APP_URL}api/auth/callback`,
        data: { display_name: payload.name, role: "Guest" },
      },
    });

    if (error) {
      return {
        code: "Error",
        message: error.message,
      };
    }

    if (!userData.user) {
      return {
        code: "Error",
        message: "Failed to create register user",
      };
    }

    await db.insert(profiles).values({
      id: userData.user.id,
      email: payload.email,
      name: payload.name,
      role: "guest",
    });

    return {
      code: "Success",
      message: "Register successful",
    };
  } catch (err) {
    console.error("[REGISTER_ERROR]", { err });
    return { code: "Error", message: (err as Error).message };
  }
};
