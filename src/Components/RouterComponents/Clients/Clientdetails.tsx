import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Clientdetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  let clients = {
    clientId: "e001",
    clientName: "Tom",
    clientPermission: "Male",
    dateofBirth: "25/6/1988",
  };
  return (
    <div>
      <h1>Client details for Id {id}</h1>
      <div>
        Client Id : {clients.clientId}
        <br></br>
        Client Name : {clients.clientName}
        <br></br>
        Client Persmission : {clients.clientPermission}
        <br></br>
        Date of Birth : {clients.dateofBirth}
        <br></br>
      </div>
      <button onClick={() => navigate("/client")}> back</button>
    </div>
  );
};

export default Clientdetails;
