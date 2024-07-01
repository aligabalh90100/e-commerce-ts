import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import { Children, lazy, Suspense } from "react";

// layout
// import MainLayout from "./layouts/MainLayout/MainLayout";
const MainLayout = lazy(() => import("./layouts/MainLayout/MainLayout"));
const ProfileLayout = lazy(
  () => import("./layouts/ProfileLayout/ProfileLayout")
);
// pages
const Home = lazy(() => import("./pages/Home/Home"));
const Categories = lazy(() => import("./pages/Categories"));
const Products = lazy(() => import("./pages/Products"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Orders = lazy(() => import("./pages/Orders"));
import Error from "./pages/Error";
import SuspenseFeedback from "./components/feedback/SuspenseFeedback";
import LottiesHandler from "./components/feedback/LottieHandler/LottiesHandler";
import { checkAuthToken, checkNotAuth } from "./utils/checkAuthToken";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LottiesHandler type="appLunch" />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<SuspenseFeedback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<SuspenseFeedback />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<SuspenseFeedback />}>
            <Wishlist />
          </Suspense>
        ),
        loader: checkNotAuth,
      },
      {
        path: "categories",
        element: (
          <Suspense fallback={<SuspenseFeedback />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "categories/products/:prefix",

        element: (
          <Suspense fallback={<SuspenseFeedback />}>
            <Products />
          </Suspense>
        ),
        loader: ({ params }) => {
          const category = params.prefix;
          if (
            category == "men" ||
            category == "kids" ||
            category == "women" ||
            category == "sport" ||
            category == "baby"
          ) {
            return true;
          } else {
            throw json({ message: "bad Request" }, { status: 400 });
          }
        },
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<SuspenseFeedback />}>
            <Login />
          </Suspense>
        ),
        loader: checkAuthToken,
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<SuspenseFeedback />}>
            <Register />
          </Suspense>
        ),
        loader: checkAuthToken,
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<SuspenseFeedback />}>
            <ProfileLayout />
          </Suspense>
        ),
        loader: checkNotAuth,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SuspenseFeedback />}>
                <Profile />
              </Suspense>
            ),
          },
          {
            path: "orders",
            element: (
              <Suspense fallback={<SuspenseFeedback />}>
                <Orders />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
