import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...rest }: InputProps) {
  return (
    <input
      {...rest}
      className={clsx(
        "input w-60 sm:w-80 h-12 px-2  placeholder-darkText text-darkText border-none outline-none",
        className
      )}
    />
  );
}
export function TextArea({ className, ...rest }: any) {
  return (
    <textarea
      {...rest}
      className={clsx(
        "block input p-1 sm:p-2.5 w-full text-sm placeholder-darkText text-darkText  rounded-md ring-0 border-none outline-none",
        className
      )}
    />
  );
}
