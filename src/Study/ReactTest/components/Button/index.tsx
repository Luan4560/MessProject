import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  color?: "#43aaff" | "#FF1dd";
}

export const Button = ({
  children,
  isLoading = false,
  color = "#43aaff",
  ...rest
}: IButtonProps) => {
  return (
    <button
      style={{
        backgroundColor: color,
        padding: "1rem",
        borderRadius: "8px",
        border: "none",
        color: "#fff",
        fontWeight: "bold",
        cursor: "pointer",
      }}
      {...rest}
      disabled={isLoading}
    >
      {isLoading ? "Carregando..." : children}
    </button>
  );
};
