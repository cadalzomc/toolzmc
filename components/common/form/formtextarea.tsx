import { cn } from "@/lib/utils";
import { Label } from "../base/label";
import { Textarea } from "../base/textarea";

interface IMCTextArea {
  errors?: Record<string, string>;
  label?: string;
  name: string;
  placeholder?: string;
  value?: string; // controlled
  defaultValue?: string; // uncontrolled
  autoComplete?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const FormTextArea: React.FC<IMCTextArea> = (props) => {
  const hasError = props.errors && props.errors[props.name];
  return (
    <div className="space-y-2 w-full">
      {(props.label || hasError) && (
        <div className={cn("flex justify-between items-center text-xs relative w-full")}>
          {props.label && (
            <Label htmlFor={props.name} className="text-sm sm:text-base">
              {props.label} {props.required && <span className="text-rose-500">*</span>}
            </Label>
          )}
          {hasError && (
            <div className="text-rose-500 mr-2 text-[11px] capitalize">
              * {(props.errors as Record<string, string>)[props.name]}
            </div>
          )}
        </div>
      )}
      <div className="relative">
        <Textarea
          id={props.name}
          name={props.name}
          placeholder={props.placeholder}
          className={cn(
            "resize-none duration-300 transition-all rounded-xl",
            hasError ? "border-destructive" : "",
            props.readonly ? "focus:border-[input] bg-transparent!" : ""
          )}
          rows={props.rows}
          autoComplete={props.autoComplete}
          value={props.value}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          disabled={props.disabled}
          readOnly={props.readonly}
        />
      </div>
    </div>
  );
};
