/* eslint-disable react-refresh/only-export-components */
import React from "react";
import PathConstants from "./pathConstants";

const StartPage = React.lazy(() => import("../pages/StartPage"))
const SelectedPage = React.lazy(() => import("../pages/SelectedPage"))
const CollectionsPage = React.lazy(() => import("../pages/CollectionsPage"))
const AboutPage = React.lazy(() => import("../pages/AboutPage"))
const RecipePage01 = React.lazy(() => import("../pages/RecipePage01"))
const RecipePage02 = React.lazy(() => import("../pages/RecipePage02"))
const RecipePage03 = React.lazy(() => import("../pages/RecipePage03"))
const RecipePage04 = React.lazy(() => import("../pages/RecipePage04"))
const RecipePage05 = React.lazy(() => import("../pages/RecipePage05"))
const RecipePage06 = React.lazy(() => import("../pages/RecipePage06"))
const RecipePage07 = React.lazy(() => import("../pages/RecipePage07"))
const RecipePage08 = React.lazy(() => import("../pages/RecipePape08"))
const RecipePage09 = React.lazy(() => import("../pages/RecipePape09"))


const routes = [
  { path: PathConstants.STARTPAGE, element: <StartPage /> },
  { path: PathConstants.SELECTEDPAGE, element: <SelectedPage /> },
  { path: PathConstants.COLLECTIONSPAGE, element: <CollectionsPage /> },
  { path: PathConstants.ABOUTPAGE, element: <AboutPage /> },
  { path: PathConstants.RECIPEPAGE01, element: <RecipePage01 /> },
  { path: PathConstants.RECIPEPAGE02, element: <RecipePage02 /> },
  { path: PathConstants.RECIPEPAGE03, element: <RecipePage03 /> },
  { path: PathConstants.RECIPEPAGE04, element: <RecipePage04 /> },
  { path: PathConstants.RECIPEPAGE05, element: <RecipePage05 /> },
  { path: PathConstants.RECIPEPAGE06, element: <RecipePage06 /> },
  { path: PathConstants.RECIPEPAGE07, element: <RecipePage07 /> },
  { path: PathConstants.RECIPEPAGE08, element: <RecipePage08 /> },
  { path: PathConstants.RECIPEPAGE09, element: <RecipePage09 /> },
]
export default routes;