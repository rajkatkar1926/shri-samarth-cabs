import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className = "", variant = "primary", ...props },
  ref,
) {
  return <button ref={ref} data-slot="button" data-variant={variant} className={`ui-button ${className}`} {...props} />;
});
