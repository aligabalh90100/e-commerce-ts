import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heading from "../components/common/Heading/Heading";
import { Col, Row, Spinner } from "react-bootstrap";
import Input from "../components/form/Input/Input";
import useRegister from "../hooks/useRegister";

const Register = () => {
  const {
    handleSubmit,
    register,
    errors,
    emailAvailabilityStatus,
    emailOnBlurHandler,
    authLoading,
    authError,
    submitHandler,
  } = useRegister();
  return (
    <>
      <Heading title="User Registeration" />{" "}
      <Row className="mb-5">
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitHandler)}>
            {/* first name */}
            <Input
              register={register}
              label="First Name"
              name="firstName"
              type="text"
              error={errors.firstName?.message}
            />
            {/* last name */}
            <Input
              register={register}
              label="Last Name"
              name="lastName"
              type="text"
              error={errors.lastName?.message}
            />
            {/* email  */}
            <Input
              disabled={emailAvailabilityStatus == "checking"}
              register={register}
              label="Email Address"
              name="email"
              type="text"
              error={
                errors.email?.message
                  ? errors.email.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use"
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server"
                  : ""
              }
              onBlur={emailOnBlurHandler}
              formText={emailAvailabilityStatus === "checking"}
              success={
                emailAvailabilityStatus === "available"
                  ? "This email address is available"
                  : ""
              }
            />
            {/* password  */}
            <Input
              register={register}
              label="Password "
              name="password"
              type="password"
              error={errors.password?.message}
            />
            {/* confirm password  */}
            <Input
              register={register}
              label="Confirm Password "
              name="confirmPassword"
              type="password"
              error={errors.confirmPassword?.message}
            />

            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={
                emailAvailabilityStatus == "checking" ||
                authLoading == "pending" ||
                emailAvailabilityStatus == "notAvailable"
              }
            >
              {authLoading == "pending" ? (
                <Spinner
                  size="sm"
                  animation="border"
                  variant="primary"
                ></Spinner>
              ) : (
                "Submit"
              )}
            </Button>
            {authError && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{authError}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default Register;
