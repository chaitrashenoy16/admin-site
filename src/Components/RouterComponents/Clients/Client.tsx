import { useNavigate } from "react-router-dom";
interface Props {
  clientId: string;
  clientName: string;
  clientPermission: string;
  dateofBirth: string;
}
const Client = () => {
  const navigate = useNavigate();
  const goDetails = (item: Props) => {
    navigate(`/details/${item.clientId}`);
  };
  let clients = [
    {
      clientId: "e001",
      clientName: "Tom",
      clientPermission: "Admin",
      dateofBirth: "25/6/1988",
    },
    {
      clientId: "e002",
      clientName: "Sam",
      clientPermission: "User",
      dateofBirth: "25/11/1980",
    },
    {
      clientId: "e003",
      clientName: "Ravi",
      clientPermission: "Admin",
      dateofBirth: "27/11/1980",
    },
    {
      clientId: "e005",
      clientName: "Kaveri",
      clientPermission: "Admin",
      dateofBirth: "9/6/1991",
    },
  ];

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
            <td>{item.clientId}</td>
            <td>{item.clientName}</td>
            <td>{item.clientPermission}</td>
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

export default Client;
