import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Userdetails = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<Users>();
  const [error, setError] = useState();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5024/api/Admin/getuserListbyID/" + id)
      .then((response) => {
        setUserData(response?.data);
      })
      .catch((error) => setError(error?.message));
  }, []);
  return (
    <div>
      <h1>User details for Id {id}</h1>
      <div>
        ID : {userData?.id}
        <br></br>
        User Name : {userData?.username}
        <br></br>
        CompanyId : {userData?.companyid}
        <br></br>
        CompanyName : {userData?.companyname}
        <br></br>
        UserPermission : {userData?.userpermission}
        <br></br>
        Usertype : {userData?.usertype}
        <br></br>
      </div>
      <button onClick={() => navigate("/usersList")}> back</button>
    </div>
  );
};

export default Userdetails;
