import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export function Header() {

  const navigate = useNavigate();

  return (
    <header className="border-b border-gray-200 bg-white p-6 flex items-center justify-between">
      <div>
        logo here
      </div>
      <Button
        onClick={() => navigate("/login")}
        className="bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
      >
        Login
      </Button>
    </header>
  );
}
