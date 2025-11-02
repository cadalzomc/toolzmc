import { ReactNode } from "react";
import { OctagonAlert, AlertTriangle, Info, CheckCircle, Loader } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../base/alert-dialog";
import { buttonVariants } from "../base/button";
import { cn } from "@/lib/utils";

const variantConfig = {
  destructive: {
    icon: OctagonAlert,
    bgColor: "bg-destructive/10",
    iconColor: "text-destructive",
    actionVariant: "destructive",
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-yellow-500/10",
    iconColor: "text-yellow-600",
    actionVariant: "default",
  },
  info: {
    icon: Info,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600",
    actionVariant: "default",
  },
  success: {
    icon: CheckCircle,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600",
    actionVariant: "default",
  },
} as const;

type Variant = keyof typeof variantConfig;

interface ReusableAlertDialogProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  loading?: boolean;
  loadingText?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  hasCancel?: boolean;
  cancelText?: string;
  actionText?: string;
  variant?: Variant;
  onAction?: () => void;
  onCancel?: () => void;
  showIcon?: boolean;
}

export const UIAlertDialog = ({
  open,
  onOpenChange,
  title,
  description,
  loading,
  loadingText = "Processing...",
  hasCancel = false,
  cancelText = "Cancel",
  actionText = "Continue",
  variant = "destructive",
  onAction,
  onCancel,
  showIcon = true,
}: ReusableAlertDialogProps) => {
  const config = variantConfig[variant];
  const Icon = config.icon;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader className="items-center">
          <AlertDialogTitle>
            {showIcon && (
              <div className={`mb-2 mx-auto flex h-14 w-14 items-center justify-center rounded-full ${config.bgColor}`}>
                <Icon className={`h-7 w-7 ${config.iconColor}`} />
              </div>
            )}
            {title}
          </AlertDialogTitle>
        </AlertDialogHeader>
        {description && (
          <AlertDialogDescription className="text-[15px] text-center" asChild>
            {description}
          </AlertDialogDescription>
        )}
        <AlertDialogFooter className="mt-2 sm:justify-center">
          {hasCancel && <AlertDialogCancel onClick={onCancel}>{cancelText}</AlertDialogCancel>}
          <AlertDialogAction
            className={cn("text-white dark:text-black", buttonVariants({ variant: config.actionVariant }))}
            onClick={onAction}
          >
            {loading && <Loader className="w-5 h-5 animate-spin" />}
            {loading ? loadingText : actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
