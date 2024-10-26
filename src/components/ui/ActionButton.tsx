import { cva } from "class-variance-authority";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type ActionButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "disabled" | "link" | "icon";
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
    "md:mx-auto max-w-96 lg:w-max w-full rounded-lg transition-all duration-300 ease-in-out active:scale-90 py-2 md:py-2 md:px-4 font-medium flex justify-center items-center gap-2",
    {
      variants: {
        variant: {
          primary:
            "bg-gradient-to-t from-orange-500 to-orange-700 hover:bg-gradient-to-b text-stone-200 hover:text-white border border-white/20",
          secondary:
            "bg-gradient-to-b from-stone-600 to-stone-800 text-orange-600 border border-white/20 hover:bg-gradient-to-t hover:border-white/50 hover:text-white",
          outline:
            "text-stone-200 border border-stone-700 hover:border-orange-500 hover:text-orange-500",
          disabled:
            "bg-stone-900 text-stone-500 cursor-not-allowed active:scale-100",
          link: "text-orange-600 hover:text-stone-200 w-max font-bold mx-auto",
          icon: "w-max h-max aspect-square text-white border border-white rounded-full",
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
        {Button}
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
