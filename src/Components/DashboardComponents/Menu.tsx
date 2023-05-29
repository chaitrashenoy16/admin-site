import { useNavigate } from "react-router-dom";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={() => navigate("/client")}>
            Client
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            href="#"
            onClick={() => navigate("/usersList")}
          >
            Users
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Help</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
