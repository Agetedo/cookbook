import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/Layout.tsx";
import Page404 from "./pages/Page404.tsx";
import StartPageLayout from "./pages/StartPageLayout.tsx";
import StartPage from "./pages/StartPage.tsx";
import "./App.scss";

export default function App() {
  const router = createBrowserRouter([
    { 
      element: <Layout />,
      errorElement: <Page404 
        error={"404"} 
        title={"Page Not Found"} 
        text={"The page you are looking for does not exist"} 
        linkTo={"Back to Start"} 
      />,
      children: routes,
    },
    {
      element: <StartPageLayout />,
      errorElement: <Page404 
        error={"404"} 
        title={"Page Not Found"} 
        text={"The page you are looking for does not exist"} 
        linkTo={"Back to Start"} 
      />,
      path: "/",
      children:[{
        index: true,
        element: <StartPage />,
      }],
    },
  ]);
  return <RouterProvider router={router} />;
}