import { AxiosError, isAxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/request";
import {
  iCreateUserResponse,
  iFormRegisterNewUser,
  iLoginUser,
  iProviderProps,
  iUserContext,
} from "./@types";

export const UserContext = createContext({} as iUserContext);

function UserProvider({ children }: iProviderProps) {
  const [user, setUser] = useState<iCreateUserResponse | null>(null);
  const navigate = useNavigate();

  async function userRegister(formData: iFormRegisterNewUser) {
    try {
      const response = await api.post("/users", formData);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  async function loginUser(formData: iLoginUser) {
    try {
      const response = await api.post("/login", formData);
      localStorage.setItem("@token", response.data.accessToken);
      setUser(response.data);
      navigate("/shop");
    } catch (error) {
      console.log(error);
      localStorage.removeItem("@token");
      isAxiosError;
    }
  }

  function userLogout() {
    setUser(null);
    localStorage.removeItem("@token");
    navigate("/");
  }

  return (
    <>
      <UserContext.Provider
        value={{ user, userRegister, loginUser, userLogout }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
}

export default UserProvider;
