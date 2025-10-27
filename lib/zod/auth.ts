import { z } from "zod";

export const ZodAuthLogin = z.object({
  email: z.email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required." }),
});

export const ZodAuthRegister = z.object({
  name: z.string().min(1, { message: "Required" }),
  email: z.email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
});
