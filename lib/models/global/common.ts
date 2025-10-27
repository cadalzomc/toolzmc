import { LucideIcon } from "lucide-react";

export interface IMenuItem {
  title: string;
  url: string;
  icon: LucideIcon;
  badge?: string;
}

export interface IValidation {
  success: boolean;
  errors: Record<string, string>;
}
