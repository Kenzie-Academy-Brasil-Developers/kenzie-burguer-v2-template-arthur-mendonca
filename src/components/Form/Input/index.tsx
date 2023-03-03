import { iInputProps } from "../../../contexts/userContext/@types";
import { StyledTextField } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";

const Input = ({ label, error, register, type }: iInputProps) => {
  return (
    <fieldset>
      <StyledTextField
        type={type}
        label={label}
        {...register}
        // errors={errors?.message}
      />
      {error ? (
        <StyledParagraph fontColor="red"> {error.message}</StyledParagraph>
      ) : null}
    </fieldset>
  );
};

export default Input;
