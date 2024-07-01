import Lottie from "lottie-react";
import notFound from "../../../assets/lottieFiles/NotFound.json";
import empty from "../../../assets/lottieFiles/emptyCart.json";
import loading from "../../../assets/lottieFiles/lazyLoading.json";
import error from "../../../assets/lottieFiles/error.json";
import appLunch from "../../../assets/lottieFiles/appLunch.json";
import success from "../../../assets/lottieFiles/orderSuccess.json";

const LottileFiles = {
  notFound,
  empty,
  loading,
  error,
  appLunch,
  success,
};

type LottiHandlerProps = {
  type: keyof typeof LottileFiles;
  message?: string;
};
const LottiesHandler = ({ type, message }: LottiHandlerProps) => {
  const lottie = LottileFiles[type];
  if (type == "appLunch") {
    return (
      <div className="vh-100  d-flex align-item-center justify-content-center">
        <Lottie animationData={lottie} loop={true} style={{ width: "200px" }} />
      </div>
    );
  }
  const messageStyle =
    type == "error"
      ? { fontSize: "19px", color: "red" }
      : { fontSize: "19px", marginTop: "30px" };
  return (
    <div className="d-flex flex-column align-items-center">
      <Lottie animationData={lottie} loop={true} style={{ width: "300px" }} />
      <h3 style={messageStyle}>{message}</h3>
    </div>
  );
};

export default LottiesHandler;
