import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Welcome</div>
      <button onClick={() => navigate("/dashboard/")}>Back to dashboard</button>
    </>
  );
};

export default Home;
