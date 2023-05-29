import { useNavigate } from "react-router-dom";
import { users } from "./Userdata";
interface Props {
  uid: string;
  userName: string;
  companyId: string;
  companyName: string;
  userPermission: string;
  usertype: string;
}
const Userslist = () => {
  const navigate = useNavigate();
  const goDetails = (item: Props) => {
    navigate(`/user/${item.uid}`);
  };

  return (
    <>
      <tbody>
        <tr>
          <th>UID</th>
          <th>UserName</th>
          <th>CompanyId</th>
          <th>CompanyName</th>
          <th>UserPermission</th>
          <th>Usertype</th>
        </tr>
        {users.map((item, index) => (
          <tr key={index}>
            <td>{item.uid}</td>
            <td>{item.userName}</td>
            <td>{item.companyId}</td>
            <td>{item.companyName}</td>
            <td>{item.userPermission}</td>
            <td>{item.usertype}</td>
            <td>
              <button onClick={() => goDetails(item)}>Details</button>
            </td>
          </tr>
        ))}
      </tbody>
      <button onClick={() => navigate("/addusers/")}>Add user</button>
      &nbsp;&nbsp;
      <button onClick={() => navigate("/dashboard")}>Back to dashbaord</button>
    </>
  );
};
export default Userslist;
