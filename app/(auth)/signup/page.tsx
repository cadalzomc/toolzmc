import { Separator } from "@/components/common";
import { FormAuthSignUp, OauthSignIn } from "@/components/shared/form";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <>
      <div className="mb-4 space-y-1">
        <p className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white">Create Your Free Account</p>
        <p className="text-sm sm:text-base text-muted-foreground">
          Join thousands of developers and professionals who streamline their workflow with our tools.
        </p>
      </div>

      <FormAuthSignUp />

      <div className="mt-4">
        <Separator />
        <OauthSignIn />
      </div>

      <div className="mt-4 space-y-1">
        <Link href="/signin/forgot_password" className="font-medium text-zinc-950 dark:text-white text-sm">
          Forgot your password?
        </Link>

        <p className="font-medium text-sm dark:text-white">
          <Link href="/signin" className="font-medium text-sm dark:text-white">
            Already have an account? Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUpPage;
