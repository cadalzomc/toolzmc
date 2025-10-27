"use client";

import { Button, FormField } from "@/components/common";
import { UIButton } from "@/components/ui";
import { toast } from "@/lib/hooks";
import { useStoreAuth } from "@/lib/stores";
import { TRPC } from "@/lib/utils";
import { EyeClosedIcon, EyeIcon, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const FormAuthSignIn = () => {
  const navigate = useRouter();
  const { mutateAsync: login } = TRPC.auth.Login.useMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { authLogin, authLoginErrors, setAuthLoginField, validateUserLogin, resetLogin } = useStoreAuth();

  const handleSignIn = async () => {
    const { success } = validateUserLogin();
    if (!success) return;

    setIsLoading(true);
    const res = await login(authLogin);
    if (res.code !== "Success") {
      console.error("ERRORLOGIN", res.message);
      toast({
        title: "Login Failed!",
        description: res.message,
        variant: "error",
      });
      setIsLoading(false);
      return;
    }

    toast({
      title: "Success!",
      description: res.message,
      variant: "success",
    });
    resetLogin();
    navigate.push("/");
  };

  return (
    <div className="space-y-3">
      <FormField
        label="Email"
        name="email"
        placeholder="name@example.com"
        className="h-11 sm:h-12"
        type="text"
        autoComplete="current-username"
        iconLeft={<Mail className="h-4 w-4" />}
        value={authLogin.email}
        onChange={(e) => setAuthLoginField("email", e.target.value)}
        errors={authLoginErrors}
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
        value={authLogin.password}
        onChange={(e) => setAuthLoginField("password", e.target.value)}
        errors={authLoginErrors}
        disabled={isLoading}
        required
      />

      <UIButton
        text="Sign in"
        isLoading={isLoading}
        loadingText="Signing in..."
        className="h-11 sm:h-12 rounded-xl"
        onClick={handleSignIn}
      />
    </div>
  );
};
