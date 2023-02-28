import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { StyledTextField } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";

export interface iInputProps {
  label: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError | null;
  type: "text" | "email" | "password";
}

const Input = ({ label, errors, register, type }: iInputProps) => {
  return (
    <fieldset>
      <StyledTextField type={type} label={label} {...register} />
      {errors ? (
        <StyledParagraph fontColor="red">{errors}</StyledParagraph>
      ) : null}
    </fieldset>
  );
};

export default Input;
