import { initTRPC, TRPCError } from "@trpc/server";
import type { Context } from "./context";

export const t = initTRPC.context<Context>().create();

export const mergeRouters = t.mergeRouters;
export const middleware = t.middleware;
export const router = t.router;

const isAuthed = t.middleware(async ({ ctx, next }) => {
  const { signature, user } = ctx;
  if (!signature || signature !== process.env.NEXT_PUBLIC_APP_VERSION) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid token" });
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
  if (!signature || signature !== process.env.NEXT_PUBLIC_APP_VERSION) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid token" });
  }
  return opts.next();
});
