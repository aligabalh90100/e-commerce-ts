import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import useCheckEmailAvailability from "./useCheckEmailAvailability";
import { SubmitHandler, useForm } from "react-hook-form";
import { signupSchema, signupTypes } from "../validation/signupValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import actAuthRegister from "../store/auth/act/actAuthRegister";
import { FocusEvent, useEffect } from "react";
import { authActions } from "../store/auth/authSlice";

const useRegister = () => {
  const nvaigate = useNavigate();
  const dispatch = useAppDispatch();
  const { loading: authLoading, error: authError } = useAppSelector(
    (state) => state.authSlice
  );
  const {
    checkEmailAvailabilty,
    emailAvailabilityStatus,
    enteredEmail,
    resetCheck,
  } = useCheckEmailAvailability();
  const {
    register,
    handleSubmit,
    getFieldState,
    trigger,
    formState: { errors },
  } = useForm<signupTypes>({
    mode: "onBlur",
    resolver: zodResolver(signupSchema),
  });
  const submitHandler: SubmitHandler<signupTypes> = async (data) => {
    const { firstName, lastName, email, password } = data;
    dispatch(actAuthRegister({ firstName, lastName, email, password }))
      .unwrap()
      .then(() => nvaigate("/login"));
  };

  const emailOnBlurHandler = async (e: FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    // getFieldState to get the state of input
    // trigger to make the validationwork-- without it first time invalid give me false
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && enteredEmail !== value) {
      checkEmailAvailabilty(value);
    }
    if (enteredEmail && invalid && isDirty) {
      resetCheck();
    }
  };
  useEffect(() => {
    return () => {
      dispatch(authActions.resetError());
    };
  }, []);

  return {
    handleSubmit,
    register,
    errors,
    emailAvailabilityStatus,
    emailOnBlurHandler,
    authLoading,
    authError,
    submitHandler,
  };
};

export default useRegister;
// const nvaigate = useNavigate();
// const dispatch = useAppDispatch();
// const { loading: authLoading, error: authError } = useAppSelector(
//   (state) => state.authSlice
// );
// const {
//   checkEmailAvailabilty,
//   emailAvailabilityStatus,
//   enteredEmail,
//   resetCheck,
// } = useCheckEmailAvailability();
// const {
//   register,
//   handleSubmit,
//   getFieldState,
//   trigger,
//   formState: { errors },
// } = useForm<signupTypes>({
//   mode: "onBlur",
//   resolver: zodResolver(signupSchema),
// });
// const submitHandler: SubmitHandler<signupTypes> = async (data) => {
//   const { firstName, lastName, email, password } = data;
//   dispatch(actAuthRegister({ firstName, lastName, email, password }))
//     .unwrap()
//     .then(() => nvaigate("/login"));
// };

// const emailOnBlurHandler = async (e: FocusEvent<HTMLInputElement>) => {
//   await trigger("email");
//   const value = e.target.value;
//   // getFieldState to get the state of input
//   // trigger to make the validationwork-- without it first time invalid give me false
//   const { isDirty, invalid } = getFieldState("email");

//   if (isDirty && !invalid && enteredEmail !== value) {
//     checkEmailAvailabilty(value);
//   }
//   if (enteredEmail && invalid && isDirty) {
//     resetCheck();
//   }
// };
// useEffect(() => {
//   return () => {
//     dispatch(authActions.resetError());
//   };
// }, []);
