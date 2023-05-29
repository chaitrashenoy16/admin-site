import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Components/LoginComponents/Login";
import Dashboard from "./Components/DashboardComponents/Dashboard";
import Client from "./Components/RouterComponents/Clients/Client";
import Clientdetails from "./Components/RouterComponents/Clients/Clientdetails";
import Userslist from "./Components/RouterComponents/Users/Userslist";
import Userdetails from "./Components/RouterComponents/Users/Userdetails";
import Newusers from "./Components/RouterComponents/Users/Newusers";
const Routerconfig = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="client" element={<Client />} />
          <Route path="details/:id" element={<Clientdetails />} />
          <Route path="usersList" element={<Userslist />} />
          <Route path="addusers" element={<Newusers />} />
          <Route path="user/:id" element={<Userdetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routerconfig;
