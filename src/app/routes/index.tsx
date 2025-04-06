import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/index.lazy";
import { ErrorPage } from "../../pages/ErrorPage/index.lazy";
import Layout from "../../shared/ui/Layout/Layout";


export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "error",
          element: <ErrorPage />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

  