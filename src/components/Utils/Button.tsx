import { ReactNode } from "react";

interface ButtonProps {
  backgroundColor: "red" | "blue";
  onClick?: () => void;
  children: ReactNode;
}
const Button = ({ backgroundColor, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`bg-${backgroundColor}-500 p-2 rounded text-white hover:bg-${backgroundColor}-700 transition duration-300 mt-4`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
