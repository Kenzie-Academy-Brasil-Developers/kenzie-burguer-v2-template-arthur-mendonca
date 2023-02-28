export interface iProviderProps {
  children: React.ReactNode;
}

export interface iCreateUserResponse {
  accessToken: string;
  user: {
    email: string;
    name: string;
    id: number;
  };
}

export interface iFormRegisterNewUser {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
}

export interface iLoginUser {
  email: string;
  password: string;
}

export interface iUserContext {
  user: iCreateUserResponse | null;
  userRegister: (formData: iFormRegisterNewUser) => Promise<void>;
  loginUser: (formData: iLoginUser) => Promise<void>;
  userLogout: () => void;
}