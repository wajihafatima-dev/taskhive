import Login from "../components/authentication/Login";
import Signup from "../components/authentication/Signup";
import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../screens/Home";

export const routes = {
  login: '/',
  signup: '/signup',
  home:'/dashboard',
  error: '*',
};

export const publicRoutes = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: routes.login,
        element: <Login />,
      },
      {
        path: routes.signup,
        element: <Signup />,
      },

      // {
      //   path: routes.navbar,
      //   element: <NavbarLayout />,
      // },
   
    ],
  },
];

export const privateRoutes = [
  {
    element: <DashboardLayout />,
    children: [
      // students routes
      {
        path: routes.home,
        element: <Home />,
      },

    ],
  },
];
