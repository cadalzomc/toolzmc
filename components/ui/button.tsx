import React from "react";
import { Loader } from "lucide-react";
import { Button } from "../common";

interface UIButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  text?: string;
  loadingText?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

export const UIButton: React.FC<UIButtonProps> = ({
  isLoading = false,
  text = "Submit",
  loadingText = "Processing...",
  variant = "default",
  disabled,
  className = "",
  ...props
}) => {
  return (
    <Button
      type="submit"
      variant={variant}
      className={`mt-2 w-full flex items-center justify-center gap-2 ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader className="h-4 w-4 animate-spin" />
          <span>{loadingText}</span>
        </>
      ) : (
        text
      )}
    </Button>
  );
};
