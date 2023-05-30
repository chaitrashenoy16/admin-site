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
        <div className="row">
          <div className="col-11">
            Welcome <b>{localStorage.getItem("uname")} </b>to the portal
          </div>
          <div className="col-1">
            <button onClick={doLogout}>Logout</button>
          </div>
        </div>
      </div>
      <Menu />
      <Footer />
    </div>
  );
};

export default Dashboard;
