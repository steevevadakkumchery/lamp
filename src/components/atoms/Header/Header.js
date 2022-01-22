import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  return (
    <header
      className="title"
      onClick={() => {
        navigate("/");
      }}
    >
      <h1>Weather Finder</h1>
    </header>
  );
}

export default Header;
