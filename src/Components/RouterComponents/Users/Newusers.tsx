import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Newusers = () => {
  const navigate = useNavigate();
  const [id, setid] = useState("");
  const [username, setusername] = useState("");
  const [companyid, setcompanyid] = useState("");
  const [companyname, setcompanyname] = useState("");
  const [usertype, setusertype] = useState("");
  const [userpermission, setuserpermission] = useState("");
  const [error, setErrors] = useState("");
  const userData: Users = {
    id,
    username,
    companyid,
    companyname,
    usertype,
    userpermission,
  };
  const onSave = () => {
    axios
      .post("http://localhost:5024/api/Admin/addUser", userData)
      .then(() => {
        navigate("/usersList");
      })
      .catch((error) => setErrors(error?.message));
  };

  return (
    <div>
      <br></br>
      <div className="row mb-3">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          ID
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-sm"
            id="userid"
            placeholder="Enter ID"
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          Username
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-sm"
            id="usersname"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          Companyid
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-sm"
            id="companyid"
            placeholder="Enter company id"
            value={companyid}
            onChange={(e) => setcompanyid(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label-sm">
          CompanyName
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-sm"
            id="companyname"
            placeholder="Enter company name"
            value={companyname}
            onChange={(e) => setcompanyname(e.target.value)}
          />
        </div>
      </div>
      <div className="row mb-3">
        <label
          htmlFor="colFormLabelSm"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          Userpermission
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-sm"
            id="userpermission"
            placeholder="Enter user permission"
            value={userpermission}
            onChange={(e) => setuserpermission(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <label
          htmlFor="colFormLabelLg"
          className="col-sm-2 col-form-label col-form-label-sm"
        >
          UserType
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control form-control-sm"
            id="usertype"
            value={usertype}
            onChange={(e) => setusertype(e.target.value)}
            placeholder="Enter user type"
          />
        </div>
      </div>
      <br></br>
      <button onClick={onSave}>Save</button>
      &nbsp;
      <button onClick={() => navigate("/usersList")}>Back to table view</button>
    </div>
  );
};

export default Newusers;
