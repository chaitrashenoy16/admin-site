import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Clients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const goDetails = (item: Client) => {
    navigate(`/details/${item.id}`);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5024/api/Admin/getclientList")
      .then((response) => {
        setClients(response.data);
      })
      .catch((error) => setError(error?.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <tbody>
        <tr>
          <th>Client ID</th>
          <th>Client Name</th>
          <th>Client Permission</th>
          <th>DOB</th>
        </tr>
        {clients.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.clientname}</td>
            <td>{item.clientpermission}</td>
            <td>{item.dateofBirth}</td>
            <td>
              <button onClick={() => goDetails(item)}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={() => navigate("/dashboard/")}>Back to dashboard</button>
    </>
  );
};

export default Clients;
