import { useNavigate } from "react-router-dom";
const Newusers = () => {
  const navigate = useNavigate();
  let data;
  const onSave = () => {
    data = {
      username: document.getElementById("usersname")?.value,
      companyname: document.getElementById("companyname")?.value,
      usertype: document.getElementById("usertype")?.value,
    };
    console.log("data to be saved", data);
  };
  return (
    <div>
      <br></br>
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
