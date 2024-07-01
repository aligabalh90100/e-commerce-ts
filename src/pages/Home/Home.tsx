import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import styles from "./styles.module.css";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import clothe1 from "../../assets/clothe1.jpg";
import clothe2 from "../../assets/clothe2.jpg";

import clothe4 from "../../assets/clothe4.jpg";
import clothe5 from "../../assets/clothe5.jpg";
import clothe6 from "../../assets/clothe6.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/categories");
  };
  return (
    <>
      <Container>
        <Row>
          <Carousel>
            <Carousel.Item>
              <Image
                src={slider1}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={slider2}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={slider1}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
                fluid
              />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row
          style={{
            borderBottom: "1px",
            borderTop: "0px",
            borderRight: "0px",
            borderLeft: "0px",
            borderStyle: "solid",
            borderColor: "#ced4da",
            paddingBottom: "8px",
            marginBottom: "30px",
          }}
        >
          <Col xs={12} md={6} lg={4} className="mt-3">
            <Row>
              <Col xs={2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#333"
                  viewBox="0 0 256 256"
                >
                  <path d="M255.42,117l-14-35A15.93,15.93,0,0,0,226.58,72H192V64a8,8,0,0,0-8-8H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H49a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,255.42,117ZM192,88h34.58l9.6,24H192ZM32,72H176v64H32ZM80,208a16,16,0,1,1,16-16A16,16,0,0,1,80,208Zm81-24H111a32,32,0,0,0-62,0H32V152H176v12.31A32.11,32.11,0,0,0,161,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,192,208Zm48-24H223a32.06,32.06,0,0,0-31-24V128h48Z"></path>
                </svg>
              </Col>
              <Col>
                <strong>Free Shipping</strong>
                <p>Free Shipping for order over 500.00 EGP</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4} className="mt-3">
            <Row>
              <Col xs={2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#333"
                  viewBox="0 0 256 256"
                >
                  <path d="M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78-34-10.89-69.25-22.14-117.95,1.64A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM232,181.67c-40.6,18.17-70.25,8.69-101.56-1.32-19.24-6.15-38.84-12.42-61-12.42a122,122,0,0,0-45.4,9V74.33c40.6-18.17,70.25-8.69,101.56,1.32S189.14,96,232,79.09ZM128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144ZM56,96v48a8,8,0,0,1-16,0V96a8,8,0,1,1,16,0Zm144,64V112a8,8,0,1,1,16,0v48a8,8,0,1,1-16,0Z"></path>
                </svg>
              </Col>
              <Col>
                <strong>Money Gurantee</strong>
                <p>Within 30 days for an exchange</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={4} className="mt-3">
            <Row>
              <Col xs={2}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="#333"
                  viewBox="0 0 256 256"
                >
                  <path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path>
                </svg>
              </Col>
              <Col>
                <strong>Online Support</strong>
                <p>Within 30 days for an exchange</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={4}
            className={`d-flex flex-column align-items-start justify-content-center ${styles.textCol}`}
          >
            <h6>NEW COLLECTIONS</h6>
            <h4>Best Sweatshirts and Tracksuits for everyone!</h4>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
            <button className={styles.shopBtn} onClick={handleNavigation}>
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width="20px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Col>
          <Col
            xs={6}
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Image src={clothe1} fluid style={{ width: "350px" }} />
          </Col>
          <Col
            xs={6}
            md={4}
            className="d-flex align-items-center justify-content-center"
          >
            <Image
              src={clothe2}
              fluid
              style={{ width: "250px", objectFit: "contain" }}
            />
          </Col>
          <Col
            xs={6}
            md={4}
            className="d-flex align-items-center justify-content-center mt-3"
          >
            <Image
              src={clothe5}
              fluid
              style={{ width: "250px", objectFit: "contain" }}
            />
          </Col>
          <Col
            xs={6}
            md={4}
            className="d-flex align-items-center justify-content-center mt-3 "
          >
            <Image src={clothe6} fluid style={{ width: "350px" }} />
          </Col>
          <Col
            xs={12}
            md={4}
            className={`d-flex flex-column align-items-start justify-content-center mt-3 ${styles.textCol}`}
          >
            <h6>NEW COLLECTIONS</h6>
            <h4>Best Sweatshirts and Tracksuits for everyone!</h4>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
            <button className={styles.shopBtn} onClick={handleNavigation}>
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width="20px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </Col>
        </Row>
      </Container>
      <Col lg={12} className={styles.chanel}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="0 0 192.756 192.756"
        >
          <g fillRule="evenodd" clipRule="evenodd">
            <path fill="#e7f5ff" d="M0 0h192.756v192.756H0V0z" />
            <path d="M33.839 69.718a1.665 1.665 0 0 0-.084.189c-2.271 4.29-6.728 7.212-11.816 7.212-7.38 0-13.435-6.182-13.435-13.813 0-7.59 6.055-13.813 13.435-13.813 5.109 0 9.587 2.985 11.837 7.338.063.084.084.126.147.252.021.021-4.289 3.133-4.331 3.07-.021-.084-.042-.147-.084-.189-1.24-3.09-4.184-5.151-7.569-5.088-4.521.042-8.242 3.785-8.242 8.431 0 4.688 3.722 8.473 8.242 8.473 3.28 0 6.14-2.019 7.443-4.878.063-.105.084-.189.126-.273l4.331 3.089zM39.411 49.744h5.172v9.651h13.582v-9.651h5.214v26.849h-5.214V64.798H44.583v11.795h-5.172V49.744zM136.379 76.593V49.744h18.775v5.424h-13.541v5.362h12.51v5.361h-12.51v5.361h15.453v5.341h-20.687zM164.404 76.593V49.744h5.256v21.508h14.592v5.341h-19.848zM108.162 76.593h-5.256V49.744h7.295l11.502 16.147V49.744h5.213v26.849h-4.162l-14.592-20.247v20.247zM83.122 55.168l-4.583 10.723h9.377l-4.794-10.723zm-6.939 16.084l-2.396 5.34h-6.224l11.9-26.849h7.274l11.985 26.849h-6.224l-2.417-5.34H76.183zM89.082 133.486a14.89 14.89 0 0 1-7.443 1.977c-5.592 0-10.491-3.049-13.141-7.568 0-.021-.021-.021-.021-.043s-.021-.021-.021-.041l2.145-1.115 2.144-1.094a.305.305 0 0 1 .063.084 10.376 10.376 0 0 0 8.83 4.941c1.199 0 2.355-.211 3.385-.547a14.927 14.927 0 0 1-3.679-9.84c0-3.742 1.367-7.189 3.637-9.84a10.238 10.238 0 0 0-3.343-.547c-3.679 0-7.085 1.977-8.956 5.152-.021.021-.021.041-.021.062l-4.31-2.229c.021-.041.042-.084.063-.105 2.628-4.604 7.59-7.695 13.225-7.695 2.733 0 5.299.736 7.443 1.998 2.145-1.262 4.71-1.998 7.443-1.998 5.635 0 10.596 3.092 13.225 7.695.021.021.041.064.062.105l-4.311 2.229c0-.021 0-.041-.02-.062-1.871-3.176-5.277-5.152-8.958-5.152-1.177 0-2.312.189-3.343.547a15.09 15.09 0 0 1 3.638 9.84c0 3.764-1.388 7.213-3.68 9.84 1.03.336 2.187.547 3.385.547 3.721 0 7.002-1.977 8.831-4.941.021-.041.043-.062.062-.084l2.145 1.094 2.145 1.115c0 .02-.02.02-.02.041s-.021.021-.021.043c-2.648 4.52-7.549 7.568-13.141 7.568-2.732 0-5.297-.736-7.442-1.977zm0-6.033c-1.766-1.871-2.901-4.416-2.901-7.213 0-2.754 1.072-5.256 2.901-7.127a10.112 10.112 0 0 1 2.902 7.127c0 2.797-1.135 5.342-2.902 7.213z" />
            <path d="M89.082 90.869c16.18 0 29.383 13.203 29.383 29.371 0 16.189-13.203 29.393-29.383 29.393-16.179-.02-29.382-13.203-29.382-29.393 0-16.146 13.203-29.35 29.382-29.371zm0 .988c15.633 0 28.395 12.762 28.395 28.383 0 15.643-12.762 28.406-28.395 28.406-15.653-.021-28.394-12.764-28.394-28.406 0-15.621 12.741-28.362 28.394-28.383z" />
          </g>
        </svg>
        <p>
          Eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodobendo viverra maecenas
          accumsan lacus vel facilisis libero Eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida. lacus vel facilisis libero.
        </p>
      </Col>
      <Container>
        <Row style={{ marginBottom: "40px" }}>
          <Col md={6} xs={12}>
            <Image src={clothe4} fluid style={{ width: "400px" }} />
          </Col>
          <Col
            md={6}
            xs={12}
            className={styles.textCol}
            style={{ marginTop: "20px" }}
          >
            <h6>NEW COLLECTIONS</h6>
            <h4>Best Sweatshirts and Tracksuits for everyone!</h4>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
            <button className={styles.shopBtn} onClick={handleNavigation}>
              Shop Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                width="20px"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            <hr />
            <p className={styles.rate}>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ff8f0f"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ff8f0f"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ff8f0f"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ff8f0f"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ff8f0f"
                  viewBox="0 0 256 256"
                >
                  <path d="M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"></path>
                </svg>
              </span>
              <span> 4.5 (10.000+) Rating</span>
            </p>
            <p>
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Quis ipsum suspendisse ultrices gravida.
            </p>
            <strong>Petra van der Meer</strong>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
