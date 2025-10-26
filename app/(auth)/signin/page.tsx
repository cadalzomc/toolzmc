import { Separator } from "@/components/common";
import { FormAuthSignIn, OauthSignIn } from "@/components/shared/form";
import Link from "next/link";

const SignInPage = () => {
  return (
    <>
      <div className="mb-4">
        <p className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">Welcome Back!</p>
        <p className="text-sm sm:text-base text-muted-foreground">
          Sign in to access your saved tools, history, and premium features.
        </p>
      </div>

      <FormAuthSignIn />

      <div className="mt-4">
        <Separator />
        <OauthSignIn />
      </div>

      <div className="mt-4 space-y-1">
        <Link href="/signin/forgot_password" className="font-medium text-zinc-950 dark:text-white text-sm">
          Forgot your password?
        </Link>

        <p className="font-medium text-sm dark:text-white">
          <Link href="/signup" className="font-medium text-sm dark:text-white">
            Dont have an account? Sign Up
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignInPage;
