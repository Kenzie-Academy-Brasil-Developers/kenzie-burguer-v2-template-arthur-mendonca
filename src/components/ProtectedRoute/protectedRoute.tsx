import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";

function ProtectedRoute() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("@token");

  useEffect(() => {
    const token = localStorage.getItem("@token");

    if (!token) {
      navigate("/");
    }
  }, [token]);

  return <>{token ? <Outlet /> : navigate("/")}</>;
}

export default ProtectedRoute;
