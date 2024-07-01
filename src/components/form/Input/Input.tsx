import { FocusEvent } from "react";
import { Form, Spinner } from "react-bootstrap";
import { UseFormRegister, Path, FieldValues } from "react-hook-form";

type InputProps<TFieldValues extends FieldValues> = {
  name: Path<TFieldValues>;
  label: string;
  type: string;
  register: UseFormRegister<TFieldValues>;
  error?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  formText?: boolean;
  success?: string;
  disabled?: boolean;
};

const Input = <TFieldValues extends FieldValues>({
  type,
  register,
  error,
  name,
  label,
  onBlur,
  formText,
  success,
  disabled,
}: InputProps<TFieldValues>) => {
  // if i have onBlucr function as prop i will implment the 2 checks if not i will do the register method only check

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        disabled={disabled}
        type={type}
        {...register(name)}
        onBlur={onBlurHandler}
        isInvalid={error ? true : false}
        isValid={success ? true : false}
      />
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      {formText && (
        <Form.Text>
          <Spinner animation="border" size="sm" variant="primary" />
        </Form.Text>
      )}
    </Form.Group>
  );
};

export default Input;
