/* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./pathConstants";

const StartPage = React.lazy(() => import("../pages/StartPage"))
const SelectedPage = React.lazy(() => import("../pages/SelectedPage"))
const CollectionsPage = React.lazy(() => import("../pages/CollectionsPage"))
const AboutPage = React.lazy(() => import("../pages/AboutPage"))
const RecipePage01 = React.lazy(() => import("../pages/RecipePage01"))
const RecipePage02 = React.lazy(() => import("../pages/RecipePage02"))

const routes = [
  { path: PathConstants.STARTPAGE, element: <StartPage /> },
  { path: PathConstants.SELECTEDPAGE, element: <SelectedPage /> },
  { path: PathConstants.COLLECTIONSPAGE, element: <CollectionsPage /> },
  { path: PathConstants.ABOUTPAGE, element: <AboutPage /> },
  { path: PathConstants.RECIPEPAGE01, element: <RecipePage01 /> },
  { path: PathConstants.RECIPEPAGE02, element: <RecipePage02 /> },
]
export default routes;