import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Login from "../pages/Authentication/Login/Login";
import SignUp from "../pages/Authentication/SignUp/SignUp";
import Courses from "../pages/Courses/Courses";
import Dashboard from "../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Instructors from "../pages/Instructors/Instructors";
import SingleCourseDetails from "../pages/SingleCourseDetails/SingleCourseDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/instructors",
        element: <Instructors />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courseDetails/:id",
        element: <SingleCourseDetails />,
        loader: ({ params }) =>
          fetch(`https://sphere-skill-server.vercel.app/courses/${params?.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);
