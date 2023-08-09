interface ButtonProps {
  color: "red" | "blue";
  onClick?: () => void;
  children: string;
}

const mapColorToStyles = {
  red: "bg-red-500 hover:bg-red-700",
  blue: "bg-blue-500 hover:bg-blue-700",
};
const Button = ({ color, onClick, children }: ButtonProps) => {
  console.log(`bg-${color}-500`);
  return (
    <button
      className={`p-2 rounded text-white transition duration-300 mt-4 ${mapColorToStyles[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
