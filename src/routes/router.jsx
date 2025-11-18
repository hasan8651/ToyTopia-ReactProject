import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import MyToys from "../pages/MyToys";
import ProfilePage from "../pages/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AboutUs from "../pages/AboutUs";
import ToyDetails from "../pages/ToyDetails";
import ErrorPage from "../pages/ErrorPage";
import LoadingSpinner from "../components/LoadingSpinner";
import ForgetPassword from "../pages/ForgetPassword";
import Terms from "../pages/Terms";
import Policy from "../pages/Policy";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <LoadingSpinner />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/my-toys",
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        ),
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword/> ,
      },
      {
        path: "/terms",
        element: <Terms/> ,
      },
      {
        path: "/policy",
        element: <Policy/> ,
      },
    ],
  },
]);