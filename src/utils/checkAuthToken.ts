import { redirect } from "react-router-dom";

export const checkAuthToken = () => {
  const { accessToken } = JSON.parse(
    localStorage.getItem("persist:auth") || ""
  );
  if (accessToken !== "null") {
    return redirect("/");
  }
  return null;
};
export const checkNotAuth = () => {
  const { accessToken } = JSON.parse(
    localStorage.getItem("persist:auth") || ""
  );
  if (accessToken == "null") {
    localStorage.setItem("redirected", "true");
    return redirect("/login");
  }
  return null;
};
