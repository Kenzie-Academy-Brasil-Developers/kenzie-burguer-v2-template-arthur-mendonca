import { useContext } from "react";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../contexts/userContext";
import { iInputProps, iLoginUser } from "../../../contexts/userContext/@types";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "./formSchema";

const LoginForm = () => {
  const { loginUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iInputProps>({ resolver: yupResolver(formSchema) });

  const submit: SubmitHandler<iLoginUser> = (formData) => {
    loginUser(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label="E-mail"
        type="email"
        register={register("email")}
        errors={errors.email?.message}
      />
      <Input
        label="Senha"
        type="password"
        register={register("password")}
        errors={errors.password?.message}
      />
      <StyledButton $buttonSize="default" $buttonStyle="green" type="submit">
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
