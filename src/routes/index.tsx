import { createBrowserRouter } from "react-router-dom";
import { Auth } from "@pages/auth/index";
import NotFound from "@pages/NotFound";
import { Home } from "@pages/home/index";
import { Todo } from "@pages/todo/index";
import { Joke } from "@pages/joke/index";
import MainApp from "@pages/MainApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    errorElement: <NotFound />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "todo",
        element: <Todo />,
      },
      {
        path: "joke",
        element: <Joke />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);

export default router;
