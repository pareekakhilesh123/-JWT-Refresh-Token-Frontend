import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../middware/axiosInstance";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/auth/profile")
      .then((res) => setUser(res.data.user))
      .catch(() => navigate("/login"));
  }, [navigate]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
