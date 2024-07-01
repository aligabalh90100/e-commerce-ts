import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { SubmitHandler, useForm } from "react-hook-form";
import { signinSchema, signinpTypes } from "../validation/signinValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import actAuthLogin from "../store/auth/act/actAuthLogin";
import { useEffect } from "react";
import Toastify from "../components/feedback/Toastify";
import { authActions } from "../store/auth/authSlice";

const useLogin = () => {
  const { loading, error: loginError } = useAppSelector(
    (state) => state.authSlice
  );
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signinpTypes>({
    mode: "onBlur",
    resolver: zodResolver(signinSchema),
  });
  const submitHandler: SubmitHandler<signinpTypes> = async (data) => {
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => {
        navigate("/");
      });
  };

  useEffect(() => {
    if (loading == "succeeded" && location.pathname == "/login") {
      Toastify("Your account created successfully", "success");
    }
    if (localStorage.getItem("redirected")) {
      Toastify("You need to login first", "error");
    }
    return () => {
      localStorage.removeItem("redirected");
      dispatch(authActions.resetUi());
    };
  }, []);

  return { handleSubmit, register, errors, submitHandler, loading, loginError };
};

export default useLogin;
