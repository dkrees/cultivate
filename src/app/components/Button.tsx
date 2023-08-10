import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "light" | "ghost";
}

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
}: Props) => {
  const btnClassNames = classNames({
    "inline-flex items-center gap-1 border px-2 py-1 text-sm font-medium leading-tight hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 active:translate-y-0.5":
      true,
    "border-cyan-600 bg-cyan-500 text-white": variant === "primary",
    "border-pink-700 bg-pink-600 text-white": variant === "secondary",
    "border-gray-200 bg-gray-100 text-gray-900": variant === "light",
    "border-none bg-transparent text-gray-900 hover:text-cyan-500":
      variant === "ghost",
  });
  return (
    <button type={type} className={btnClassNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
