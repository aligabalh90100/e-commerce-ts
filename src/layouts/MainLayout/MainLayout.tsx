import { Container } from "react-bootstrap";
import styles from "./styles.module.css";
import Header from "../../components/common/Header/Header";
import Footer from "../../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <Container className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
}
