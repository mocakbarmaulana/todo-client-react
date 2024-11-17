import { createBrowserRouter } from "react-router-dom";
import Layout from "@layouts/Layout";
import { Auth } from "@pages/auth/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/auth",
    element: <Auth />,
  }
]);

export default router;
