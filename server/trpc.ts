import { initTRPC, TRPCError } from "@trpc/server";
import type { Context } from "./context";

export const t = initTRPC.context<Context>().create();

export const mergeRouters = t.mergeRouters;
export const middleware = t.middleware;
export const router = t.router;

const isAuthed = t.middleware(async ({ ctx, next }) => {
  const { signature, user } = ctx;
  if (!signature || signature !== process.env.NEXT_PUBLIC_APP_KEY) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "You do not have permission to perform this action" });
  }
  if (!user) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Not authenticated" });
  }
  return next({
    ctx: {
      ...ctx,
    },
  });
});

export const authProcedure = t.procedure.use(isAuthed);

export const publicProcedure = t.procedure.use(async (opts) => {
  const { signature } = opts.ctx;
  if (!signature || signature !== process.env.NEXT_PUBLIC_APP_KEY) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "You do not have permission to perform this action" });
  }
  return opts.next();
});
