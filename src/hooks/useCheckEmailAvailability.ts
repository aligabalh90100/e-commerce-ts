import { useState } from "react";
import baseUrl from "../API/axios-global";

type TStatus = "idle" | "checking" | "available" | "notAvailable" | "failed";
const useCheckEmailAvailability = () => {
  const [emailAvailabilityStatus, setEmailAvailabilityStatus] =
    useState<TStatus>("idle");
  const [enteredEmail, setEnterdEmail] = useState<null | string>(null);
  const checkEmailAvailabilty = async (email: string) => {
    setEnterdEmail(email);
    setEmailAvailabilityStatus("checking");

    try {
      const response = await baseUrl.get(`/users?email=${email}`);

      if (response.data.length) {
        setEmailAvailabilityStatus("notAvailable");
      } else {
        setEmailAvailabilityStatus("available");
      }
    } catch (error) {
      setEmailAvailabilityStatus("failed");
    }
  };

  const resetCheck = () => {
    setEnterdEmail(null);
    setEmailAvailabilityStatus("idle");
  };
  return {
    checkEmailAvailabilty,
    emailAvailabilityStatus,
    enteredEmail,
    resetCheck,
  };
};

export default useCheckEmailAvailability;
