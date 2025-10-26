import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Label } from "../base/label";
import { Input } from "../base/input";

interface FormFieldProps {
  errors?: Record<string, string>;
  label?: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  value?: string; // controlled
  defaultValue?: string; // uncontrolled
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconRightClassName?: string;
  iconLeftClassName?: string;
  autoComplete?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormField = ({
  errors,
  label,
  name,
  type = "text",
  placeholder,
  className,
  value,
  defaultValue,
  iconLeft,
  iconRight,
  iconRightClassName,
  iconLeftClassName,
  autoComplete,
  disabled,
  required,
  readonly,
  onChange,
}: FormFieldProps) => {
  const hasError = errors && errors[name];
  return (
    <div className="space-y-2 w-full">
      {(label || hasError) && (
        <div className={cn("flex justify-between items-center text-xs relative w-full")}>
          {label && (
            <Label htmlFor={name} className="text-sm sm:text-base">
              {label} {required && <span className="text-rose-500">*</span>}
            </Label>
          )}
          {hasError && <div className="text-rose-500 mr-2 text-[11px] capitalize">* {errors[name]}</div>}
        </div>
      )}
      <div className="relative">
        {iconLeft && (
          <div
            className={cn("absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground", iconLeftClassName)}
          >
            {iconLeft}
          </div>
        )}
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={cn(
            "duration-300 transition-all rounded-xl shadow-none",
            className,
            iconLeft ? "pl-10" : "",
            hasError ? "border-destructive!" : "",
            readonly ? "focus-visible:ring-0 focus-visible:border-[input] bg-transparent!" : ""
          )}
          autoComplete={autoComplete}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
          disabled={disabled}
          readOnly={readonly}
        />
        {iconRight && (
          <div
            className={cn("absolute right-3 top-1/2 -translate-y-1/2 h-5 text-muted-foreground", iconRightClassName)}
          >
            {iconRight}
          </div>
        )}
      </div>
    </div>
  );
};
