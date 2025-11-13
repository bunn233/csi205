import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ForwordToHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("../home");
  }, []); //load
  return (
    <>
      <h2>Forword To Home</h2>
    </>
  );
};

export default ForwordToHome;
