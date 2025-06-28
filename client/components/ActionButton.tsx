import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ActionButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
  icon?: ReactNode;
}

export default function ActionButton({
  children,
  to,
  onClick,
  variant = "primary",
  icon,
}: ActionButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-3 px-6 py-4 rounded-xl font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-lg";

  const variantClasses = {
    primary: "bg-purple-600 hover:bg-purple-700",
    secondary: "bg-purple-500 hover:bg-purple-600",
    tertiary: "bg-purple-700 hover:bg-purple-800",
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {icon && <span className="text-xl">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {icon && <span className="text-xl">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}
