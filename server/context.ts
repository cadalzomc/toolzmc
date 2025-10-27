import { dbServer } from "@/lib/db/server";
import { inferAsyncReturnType } from "@trpc/server";
import { FetchCreateContextFnOptions } from "@trpc/server/adapters/fetch";

export async function createContext({ req }: FetchCreateContextFnOptions) {
  const supabase = await dbServer();
  const signature = req.headers.get("x-niftyers");
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
