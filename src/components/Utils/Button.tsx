import { ReactNode } from "react";

interface ButtonProps {
  color: "red" | "blue";
  onClick?: () => void;
  children: ReactNode;
}
const Button = ({ color, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`bg-${color}-500 p-2 rounded text-white hover:bg-${color}-700 transition duration-300 mt-4`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
