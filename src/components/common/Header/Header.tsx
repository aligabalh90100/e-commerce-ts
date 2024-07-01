import { Badge, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import style from "./styles.module.css";
import HeaderCart from "../../ecommerce/HeaderCart/HeaderCart";
import { NavLink } from "react-router-dom";
import HeaderWishlist from "../../ecommerce/HeaderWishlist/HeaderWishList";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import { authActions } from "../../../store/auth/authSlice";
import { CartActions } from "../../../store/cart/CartSlice";

const Header = () => {
  const { accessToken, user } = useAppSelector((state) => state.authSlice);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(CartActions.clearCartAfterOrder());
    dispatch(authActions.authLogout());
    // dispatch(wishlistActions.resetWishlist());
  };
  return (
    <header>
      <div className={style.headerContainer}>
        <h1 className={style.headerLogo}>
          <span>Our</span>
          <Badge bg="info"> eCom</Badge>
        </h1>
        <div className="d-flex gap-3">
          <HeaderWishlist />
          {/* <Link to={"wishlist"}>wishlist</Link> */}
          <HeaderCart />
        </div>
      </div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="categories">
                Categories
              </Nav.Link>
            </Nav>
            <Nav className="">
              {!accessToken ? (
                <>
                  <Nav.Link as={NavLink} to="login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="register">
                    Register
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={`Welcome ${user?.firstName} ${user?.lastName}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={NavLink} to="profile" end>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item as={NavLink} to="/profile/orders" end>
                    Orders
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={handleLogout} as={NavLink} to="/">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
