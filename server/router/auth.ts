import { publicProcedure, router } from "@/server/trpc";
import { Login, Register } from "../service";
import { ZodAuthLogin, ZodAuthRegister } from "@/lib/zod";

export const authRouter = router({
  Register: publicProcedure.input(ZodAuthRegister).mutation(({ input }) => Register(input)),
  Login: publicProcedure.input(ZodAuthLogin).mutation(({ input }) => Login(input)),
});
