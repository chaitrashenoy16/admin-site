import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Menu from "./Menu";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const doLogout = () => {
    localStorage.removeItem("Isauth");
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div>
        <p>
          Welcome <b>{localStorage.getItem("uname")} </b>to the portal
        </p>
        <button onClick={doLogout}>Logout</button>
      </div>
      <Menu />
      <Footer />
    </div>
  );
};

export default Dashboard;
