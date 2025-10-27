"use client";

import { Button, FormField } from "@/components/common";
import { UIButton } from "@/components/ui";
import { register } from "@/lib/common/auth";
import { useStoreAuth } from "@/lib/stores";
import { EyeClosedIcon, EyeIcon, User2Icon, Lock } from "lucide-react";

import { useState } from "react";

export const FormAuthSignUp = () => {
  const { authRegister, authRegisterErrors, setAuthRegisterField, validateUserRegister } = useStoreAuth();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async () => {
    const { success } = validateUserRegister();
    if (!success) return;

    const res = await register(authRegister);
    if (res.code !== "Success") {
      console.log("ERRORLOGIN", res.message);
      return;
    }

    console.log("SUCCESSLOGIN", res.message);

    console.log("SUCCESSLOGIN", authRegister);
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
        required
      />

      <UIButton
        text="Sign Up"
        loadingText="Signing up..."
        className="h-11 sm:h-12 rounded-xl"
        onClick={handleRegister}
      />
    </div>
  );
};
