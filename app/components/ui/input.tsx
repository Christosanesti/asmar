import * as React from "react";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={`flex w-full h-9 rounded-md border border-input bg-background-transparent py-2 text-sm ring-offset-background file:border-0 file:text-sm rind-offset-background file:bg-transparent file-font-medium placeholder:bg-gray-600 placeholder:text-muted-foreground placeholder:px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50`}
        type={type}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
export { Input };
