import { Outlet, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";

function ProtectedRoute() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const token = localStorage.getItem("@token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  return <>{token ? <Outlet /> : navigate("/")}</>;
}

export default ProtectedRoute;
