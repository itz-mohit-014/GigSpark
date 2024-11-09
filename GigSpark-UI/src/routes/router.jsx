import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/notfound/NotFound";
import Home from "../pages/home/Home";
import AllGigs from "../pages/allGigs/AllGigs";
import MyGigs from "../pages/myGigs/MyGigs";
import Gig from "../pages/gig/Gig";
import Orders from "../pages/orders/Orders";
import Messages from "../pages/messages/Messages";
import Message from "../pages/message/Message";
import Add from "../pages/addNewcategory/Add";
import AuthLayout from "../pages/auth/AuthLayout";
import Signin from "../pages/signin/Signin";
import Signup from "../pages/signup/Signup";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "category",
          element: <AllGigs />,
        },
        {
          path: "myGigs",
          element: <MyGigs />,
        },
        {
          path: "gig/:Id",
          element: <Gig />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "message/:Id",
          element: <Message />,
        },
        {
          path: "add-new-gig",
          element: <Add />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ], {
    future: {
      v7_relativeSplatPath: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_skipActionStatusRevalidation: true,
      v7_skipActionErrorRevalidation:true,
    },
  });

  export default router