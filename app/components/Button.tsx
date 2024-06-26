import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-14 items-center rounded-[50px] bg-primary px-12 text-sm font-medium text-white transition-colors hover:bg-[#310061] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#260844] active:bg-[#260844] aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}
export function ActionButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 w-10 rounded-full items-center justify-center bg-primary text-sm font-medium text-white transition-colors hover:bg-[#310061] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#260844] active:bg-[#260844] aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}
export function BluredShip({ children, className, ...rest }: any) {
  return (
    <div {...rest} className={clsx("blured-ship -z-[1]", className)}>
      {children}
    </div>
  );
}
