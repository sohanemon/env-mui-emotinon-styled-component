import { createBrowserRouter } from "react-router-dom";
import Main from "./components/main";
import SignIn from "./components/signin";
import SignUp from "./components/signup";
import Home from "./home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <SignIn /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
  { path: "/home", element: <Home /> },
]);
export default router;
