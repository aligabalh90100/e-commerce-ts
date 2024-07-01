import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toastify = (message: string, type: string) => {
  if (type == "success") {
    toast.success(message);
  } else if (type == "error") {
    toast.error(message);
  }
};

export default Toastify;
