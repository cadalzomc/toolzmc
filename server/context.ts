import { inferAsyncReturnType } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";
import { supabaseServer } from "./db";

export async function createContext({ req }: FetchCreateContextFnOptions) {
  const supabase = await supabaseServer();
  const signature = req.headers.get("x-niftyers") ?? undefined;
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return {
    req,
    supabase,
    signature,
    user,
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
