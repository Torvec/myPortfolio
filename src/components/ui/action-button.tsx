import { cva } from "class-variance-authority";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ActionButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
  href?: string;
};

export default function ActionButton({
  children,
  className,
  variant,
  type,
  href,
  disabled,
  ...props
}: ActionButtonProps) {
  const buttonVariants = cva(
    "md:mx-auto max-w-96 w-full rounded-lg transition-all duration-300 ease-in-out active:scale-90 py-2 md:py-2 md:px-4 font-medium flex justify-center items-center gap-2",
    {
      variants: {
        variant: {
          primary:
            "bg-gradient-to-t from-orange-500 to-orange-700 hover:bg-gradient-to-b text-orange-100 hover:text-orange-50 border border-orange-400 hover:border-orange-300",
          secondary:
            "bg-gradient-to-b from-stone-300 to-stone-500 text-stone-800 border border-stone-300 hover:bg-gradient-to-t hover:border-stone-200 hover:text-stone-50",
          outline:
            "text-stone-200 border border-stone-700 hover:border-orange-500 hover:text-orange-500",
        },
      },
    },
  );
  const Button = (
    <button
      {...props}
      className={cn(buttonVariants({ variant }), className)}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
  // Used for rendering a button element with an anchor tag around it, so that the link works no matter where you press the button
  const ButtonWrapper = () => {
    return href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <button
          {...props}
          className={cn(buttonVariants({ variant }), className)}
          type={type}
          disabled={disabled}
        >
          {children}
        </button>
      </a>
    ) : (
      Button
    );
  };

  return ButtonWrapper();
}

// This utility function merges the classnames from tailwindcss using twMerge and clsx
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
