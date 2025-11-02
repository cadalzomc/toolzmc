"use client";

import { Separator } from "@/components/common";
import { FormAuthSignIn, OauthSignIn } from "@/components/shared/form";
import { motion } from "framer-motion";
import Link from "next/link";

const SignInPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8">
        <p className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">Welcome Back!</p>
        <p className="text-sm text-muted-foreground">
          Sign in to access your saved tools, history, and other features.
        </p>
      </div>

      <FormAuthSignIn />

      <div className="mt-4">
        <Separator />
        <OauthSignIn />
      </div>

      <div className="mt-4 space-y-1">
        <Link href="/auth/signin/forgot_password" className="font-medium text-zinc-950 dark:text-white text-sm">
          Forgot your password?
        </Link>

        <p className="font-medium text-sm dark:text-white">
          <Link href="/auth/signup" className="font-medium text-sm dark:text-white">
            Dont have an account? Sign Up
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignInPage;
