import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import App from "@/App";
import AboutPage from "@/pages/AboutPage";
import SignUpPage from "@/pages/SignUpPage";
import LoginPage from "@/pages/LoginPage";
import AddTutorialPage from "@/pages/AddTutorialPage.jsx";
import PrivateRoute from "@/components/PrivateRoute.jsx";
import FindTutorsPage from "@/pages/FindTutorsPage.jsx";
import Error from "@/pages/Error.jsx";
import TutorDetailsPage from "@/pages/TutorDetailsPage.jsx";
import MyBookingPage from "@/pages/MyBookingPage.jsx";
import MyTutorialsPage from "@/pages/MyTutorialsPage.jsx";
import UpdateTutorPage from "@/pages/UpdateTutorPage.jsx";
const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "add-tutorial",
        element: (
          <PrivateRoute>
            <AddTutorialPage />,
          </PrivateRoute>
        ),
      },
      {
        path: "find-tutor",
        element: <FindTutorsPage />,
      },
      {
        path: "tutor/:details",
        element: <TutorDetailsPage />,
      },
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookingPage />
          </PrivateRoute>
        ),
      },
      {
        path: "my-tutorials",
        element: <MyTutorialsPage />,
      },
      {
        path: "update-tutor/:id",
        element: <UpdateTutorPage />,
      },
    ],
  },

  {
    path: "*",
    element: <Error />,
  },
]);

export default function MainRoutes() {
  return <RouterProvider router={ROUTES} />;
}
