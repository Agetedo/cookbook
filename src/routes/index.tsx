/* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./pathConstants";

const StartPage = React.lazy(() => import("../pages/StartPage"))
const SelectedPage = React.lazy(() => import("../pages/SelectedPage"))
const CollectionsPage = React.lazy(() => import("../pages/CollectionsPage"))
const AboutPage = React.lazy(() => import("../pages/AboutPage"))

const routes = [
  { path: PathConstants.STARTPAGE, element: <StartPage /> },
  { path: PathConstants.SELECTEDPAGE, element: <SelectedPage /> },
  { path: PathConstants.COLLECTIONSPAGE, element: <CollectionsPage /> },
  { path: PathConstants.ABOUTPAGE, element: <AboutPage /> },
]
export default routes;