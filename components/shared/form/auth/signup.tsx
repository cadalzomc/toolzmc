"use client";

import { Alert, AlertDescription, AlertTitle, Button, FormField } from "@/components/common";
import { UIButton } from "@/components/ui";
import { toast } from "@/lib/hooks";
import { useStoreAuth } from "@/lib/stores";
import { TRPC } from "@/lib/utils";
import { EyeClosedIcon, EyeIcon, User2Icon, Lock, CircleCheckBigIcon } from "lucide-react";

import { useState } from "react";

export const FormAuthSignUp = () => {
  const { authRegister, authRegisterErrors, setAuthRegisterField, validateUserRegister, resetRegister } =
    useStoreAuth();
  const { mutateAsync: register } = TRPC.auth.Register.useMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSiuccess, setIsSuccess] = useState(false);

  const handleRegister = async () => {
    const { success } = validateUserRegister();
    if (!success) return;

    setIsLoading(true);

    const res = await register(authRegister);
    if (res.code !== "Success") {
      console.log("ERRORLOGIN", res.message);
      toast({
        title: "Signup Failed!",
        description: res.message,
        variant: "error",
      });
      setIsLoading(false);
      return;
    }

    setIsSuccess(true);
    resetRegister();
    setIsLoading(false);
  };

  return (
    <div className="space-y-3">
      <FormField
        label="Full Name"
        name="name"
        placeholder="John Doe"
        className="h-11 sm:h-12"
        type="text"
        autoComplete="new-fullname"
        iconLeft={<User2Icon className="h-4 w-4" />}
        value={authRegister.name}
        onChange={(e) => setAuthRegisterField("name", e.target.value)}
        errors={authRegisterErrors}
        disabled={isLoading}
        required
      />
      <FormField
        label="Email"
        name="email"
        placeholder="name@example.com"
        className="h-11 sm:h-12"
        type="text"
        autoComplete="new-email"
        iconLeft={<User2Icon className="h-4 w-4" />}
        value={authRegister.email}
        onChange={(e) => setAuthRegisterField("email", e.target.value)}
        errors={authRegisterErrors}
        disabled={isLoading}
        required
      />

      <FormField
        label="Password"
        name="password"
        placeholder="•••••••••••"
        className="h-11 sm:h-12"
        type={showPassword ? "text" : "password"}
        autoComplete="off"
        iconRight={
          <Button onClick={() => setShowPassword(!showPassword)} size="icon" variant="ghost">
            {showPassword ? <EyeIcon className="h-5 w-5" /> : <EyeClosedIcon className="h-5 w-5" />}
          </Button>
        }
        iconLeft={<Lock className="h-4 w-4" />}
        iconRightClassName="top-[15px] sm:top-[18px]!"
        value={authRegister.password}
        onChange={(e) => setAuthRegisterField("password", e.target.value)}
        errors={authRegisterErrors}
        disabled={isLoading}
        required
      />

      <UIButton
        text="Sign Up"
        isLoading={isLoading}
        loadingText="Signing up..."
        className="h-11 sm:h-12 rounded-xl"
        onClick={handleRegister}
      />

      {isSiuccess && (
        <Alert className="border-emerald-600/50 text-emerald-600 dark:border-emerald-600 [&>svg]:text-emerald-600">
          <CircleCheckBigIcon className="size-4" />
          <AlertTitle className="font-bold mb-1">Signup Successful</AlertTitle>
          <AlertDescription className="text-emerald-600">
            <ul className="list-disc text-[13px]">
              <li>Youre almost there!</li>
              <li>Please check your email inbox (and spam folder)</li>
              <li>Click the link to verify your account</li>
              <li>Verification link has 5 minutes to expire</li>
            </ul>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};
