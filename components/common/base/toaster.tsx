"use client";

import { useToast } from "@/lib/hooks";
import { getToastIcon, Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "./toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        const Icon = getToastIcon(props.variant ?? undefined);
        return (
          <Toast key={id} {...props}>
            <div className="flex items-start gap-3 flex-1">
              {Icon && <Icon className="h-5 w-5 mt-0.5 shrink-0" />}
              <div className="grid gap-1 flex-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && <ToastDescription>{description}</ToastDescription>}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
