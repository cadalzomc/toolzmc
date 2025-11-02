"use client";

import { Separator } from "@/components/common";
import { FormAuthSignUp, OauthSignIn } from "@/components/shared/form";
import { motion } from "framer-motion";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
      <div className="mb-8 space-y-1">
        <p className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">Create Your Account</p>
        <p className="text-sm text-muted-foreground">
          Join thousands of developers and professionals who streamline <br /> their workflow with our tools.
        </p>
      </div>

      <FormAuthSignUp />

      <div className="mt-4">
        <Separator />
        <OauthSignIn />
      </div>

      <div className="mt-4 space-y-1">
        <Link href="/auth/signin/forgot_password" className="font-medium text-zinc-950 dark:text-white text-sm">
          Forgot your password?
        </Link>

        <p className="font-medium text-sm dark:text-white">
          <Link href="/auth/signin" className="font-medium text-sm dark:text-white">
            Already have an account? Sign In
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
