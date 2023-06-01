import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const Userslist = () => {
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const goDetails = (item: Users) => {
    navigate(`/user/${item.id}`);
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5024/api/Admin/getuserList")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => setError(error?.message))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const deleteUser = (user: Users) => {
    const orginalState = [...users];
    setUsers(users.filter((x) => x.id !== user.id));
    axios
      .delete("http://localhost:5024/api/Admin/deleteUser/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(orginalState);
      });
  };

  if (error) return <p>{error}</p>;
  return (
    <>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Companyid</th>
          <th>Companyname</th>
          <th>Usertype</th>
          <th>Userpermission</th>
        </tr>
        {users?.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.username}</td>
            <td>{item.companyid}</td>
            <td>{item.companyname}</td>
            <td>{item.usertype}</td>
            <td>{item.userpermission}</td>
            <td>
              <button onClick={() => goDetails(item)}>Details</button>
            </td>
            <td>
              <button onClick={() => deleteUser(item)}>Delete</button>
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
