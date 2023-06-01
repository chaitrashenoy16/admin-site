import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
interface Client {
  id: string;
  clientname: string;
  clientpermission: string;
  dateofBirth: string;
}
const Clientdetails = () => {
  const [client, setClients] = useState<Client>();
  const [error, setError] = useState();
  const navigate = useNavigate();
  let { id } = useParams();
  useEffect(() => {
    axios
      .get("http://localhost:5024/api/Admin/getClientListbyID/" + id)
      .then((response) => {
        setClients(response?.data);
      })
      .catch((error) => setError(error?.message));
  }, []);
  return (
    <div>
      <h1>Client details for Id {id}</h1>
      <div>
        Client Id : {client?.id}
        <br></br>
        Client Name : {client?.clientname}
        <br></br>
        Client Persmission : {client?.clientpermission}
        <br></br>
        Date of Birth : {client?.dateofBirth}
        <br></br>
      </div>
      <button onClick={() => navigate("/client")}> back</button>
    </div>
  );
};

export default Clientdetails;
