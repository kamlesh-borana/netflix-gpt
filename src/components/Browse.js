import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { useEffect } from "react";

const Browse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Header />
      Browse
    </div>
  );
};

export default Browse;
