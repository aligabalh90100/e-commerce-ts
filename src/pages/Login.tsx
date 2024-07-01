import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heading from "../components/common/Heading/Heading";
import { Col, Row, Spinner } from "react-bootstrap";
import Input from "../components/form/Input/Input";
import { ToastContainer } from "react-toastify";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const { handleSubmit, register, errors, submitHandler, loading, loginError } =
    useLogin();
  return (
    <>
      <Heading title="User Login" />{" "}
      <Row className="mb-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitHandler)}>
            <Input
              label="Email"
              register={register}
              name="email"
              type="email"
              error={errors.email?.message}
            />
            <Input
              label="Password"
              register={register}
              name="password"
              type="password"
              error={errors.password?.message}
            />
            <Button variant="info" type="submit" style={{ color: "white" }}>
              {loading == "pending" ? (
                <Spinner
                  size="sm"
                  animation="border"
                  variant="primary"
                ></Spinner>
              ) : (
                "Submit"
              )}
            </Button>{" "}
            {loginError && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>
                {loginError}
              </p>
            )}
          </Form>
        </Col>
      </Row>
      <ToastContainer style={{ fontSize: "15px" }} />
    </>
  );
};

export default Login;
