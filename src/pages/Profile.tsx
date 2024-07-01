import Heading from "../components/common/Heading/Heading";
import { useAppSelector } from "../store/hook";

const Profile = () => {
  const accountInfo = useAppSelector((state) => state.authSlice.user);
  return (
    <>
      <Heading title="Account Info" />
      <ul>
        <li>
          <span className="fw-medium">First Name:</span>{" "}
          <span style={{ color: "#343a40", textTransform: "capitalize" }}>
            {accountInfo?.firstName}
          </span>
        </li>
        <li>
          <span className="fw-medium">Last Name</span>:{" "}
          <span style={{ color: "#343a40", textTransform: "capitalize" }}>
            {" "}
            {accountInfo?.lastName}
          </span>
        </li>
        <li>
          <span className="fw-medium">Email</span>: {accountInfo?.email}
        </li>
      </ul>
    </>
  );
};

export default Profile;
