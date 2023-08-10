import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  variant?: "primary" | "secondary" | "light" | "danger" | "warning" | "info";
}

const Alert = ({ children, variant = "danger" }: Props) => {
  const alertClassNames = classNames({
    "w-full rounded-md border p-3": true,
    "border-cyan-600 bg-cyan-500 text-white": variant === "primary",
    "border-pink-700 bg-pink-600 text-white": variant === "secondary",
    "border-gray-200 bg-gray-100 text-gray-900": variant === "light",
    "border-red-600 bg-red-500 text-white": variant === "danger",
    "border-amber-600 bg-amber-500 text-white": variant === "warning",
    "border-sky-200 bg-sky-100 text-gray-900": variant === "info",
  });
  return <div className={alertClassNames}>{children}</div>;
};

export default Alert;
