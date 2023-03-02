import Input from "../Input";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { useForm } from "react-hook-form";
import {
  iFormRegisterNewUser,
  iInputProps,
} from "../../../contexts/userContext/@types";
import { SubmitHandler } from "react-hook-form/dist/types/form";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { formSchema } from "./formSchema";
import { yupResolver } from "@hookform/resolvers/yup";

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iInputProps>({ resolver: yupResolver(formSchema) });

  const submit: SubmitHandler<iFormRegisterNewUser> = (formData) => {
    userRegister(formData);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        label="Nome"
        register={register("name")}
        errors={errors.name?.message}
      />
      <Input
        type="email"
        label="Seu e-mail"
        register={register("email")}
        errors={errors.email?.message}
      />
      <Input
        type="password"
        label="Inserir senha"
        register={register("password")}
        errors={errors.password?.message}
      />
      <Input
        label="Repetir senha"
        type="passwordConfirm"
        register={register("passwordConfirm")}
        errors={errors.passwordConfirm?.message}
      />
      <StyledButton $buttonSize="default" $buttonStyle="gray" type="submit">
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
