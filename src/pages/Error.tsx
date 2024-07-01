import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import LottiesHandler from "../components/feedback/LottieHandler/LottiesHandler";
const Error = () => {
  // const error = useRouteError();
  // let errorStatus: number;
  // let errorText: string;
  // if (isRouteErrorResponse(error)) {
  //   errorStatus = error.status;
  //   errorText = error.data.message;
  // } else {
  //   errorStatus = 404;
  //   errorText = "Page Not Found";
  // }
  return (
    <Container className="notFound">
      <LottiesHandler type="notFound" />
      <Link to="/" replace={true}>
        How about going back to safety
      </Link>
    </Container>
  );
};

export default Error;
