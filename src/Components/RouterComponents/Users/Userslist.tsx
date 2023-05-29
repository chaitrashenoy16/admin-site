import { useNavigate } from "react-router-dom";
const Userslist = () => {
  const navigate = useNavigate();
  const goDetails = () => {
    navigate("/user/e001");
  };
  let users = [
    {
      uid: "e001",
      userName: "Deepa",
      companyId: "E009",
      companyName: "Trivium",
      userPermission: "User",
      usertype: "Senior",
    },
    {
      uid: "e001",
      userName: "Chaitra",
      companyId: "E007",
      companyName: "TCS",
      userPermission: "User",
      usertype: "Senior",
    },
    {
      uid: "e001",
      userName: "Sakshi",
      companyId: "E008",
      companyName: "ABC",
      userPermission: "Admin",
      usertype: "Senior",
    },
    {
      uid: "e001",
      userName: "Diya",
      companyId: "Admin",
      companyName: "Trivium",
      userPermission: "User",
      usertype: "Senior",
    },
  ];

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
              <button onClick={goDetails}>Details</button>
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
