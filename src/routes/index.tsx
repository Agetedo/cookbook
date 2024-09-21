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
const RecipePage10 = React.lazy(() => import("../pages/RecipePape10"))
const RecipePage11 = React.lazy(() => import("../pages/RecipePape11"))
const RecipePage12 = React.lazy(() => import("../pages/RecipePape12"))
const RecipePage13 = React.lazy(() => import("../pages/RecipePape13"))
const RecipePage14 = React.lazy(() => import("../pages/RecipePape14"))
const RecipePage15 = React.lazy(() => import("../pages/RecipePape15"))
const RecipePage16 = React.lazy(() => import("../pages/RecipePape16"))
const RecipePage17 = React.lazy(() => import("../pages/RecipePape17"))
const RecipePage18 = React.lazy(() => import("../pages/RecipePape18"))
const RecipePage19 = React.lazy(() => import("../pages/RecipePape19"))
const RecipePage20 = React.lazy(() => import("../pages/RecipePape20"))
const RecipePage21 = React.lazy(() => import("../pages/RecipePape21"))
const RecipePage22 = React.lazy(() => import("../pages/RecipePape22"))
const RecipePage23 = React.lazy(() => import("../pages/RecipePape23"))
const RecipePage24 = React.lazy(() => import("../pages/RecipePape24"))
const RecipePage25 = React.lazy(() => import("../pages/RecipePape25"))
const RecipePage26 = React.lazy(() => import("../pages/RecipePape26"))
const RecipePage27 = React.lazy(() => import("../pages/RecipePape27"))
const RecipePage28 = React.lazy(() => import("../pages/RecipePape28"))

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
  { path: PathConstants.RECIPEPAGE10, element: <RecipePage10 /> },
  { path: PathConstants.RECIPEPAGE11, element: <RecipePage11 /> },
  { path: PathConstants.RECIPEPAGE12, element: <RecipePage12 /> },
  { path: PathConstants.RECIPEPAGE13, element: <RecipePage13 /> },
  { path: PathConstants.RECIPEPAGE14, element: <RecipePage14 /> },
  { path: PathConstants.RECIPEPAGE15, element: <RecipePage15 /> },
  { path: PathConstants.RECIPEPAGE16, element: <RecipePage16 /> },
  { path: PathConstants.RECIPEPAGE17, element: <RecipePage17 /> },
  { path: PathConstants.RECIPEPAGE18, element: <RecipePage18 /> },
  { path: PathConstants.RECIPEPAGE19, element: <RecipePage19 /> },
  { path: PathConstants.RECIPEPAGE20, element: <RecipePage20 /> },
  { path: PathConstants.RECIPEPAGE21, element: <RecipePage21 /> },
  { path: PathConstants.RECIPEPAGE22, element: <RecipePage22 /> },
  { path: PathConstants.RECIPEPAGE23, element: <RecipePage23 /> },
  { path: PathConstants.RECIPEPAGE24, element: <RecipePage24 /> },
  { path: PathConstants.RECIPEPAGE25, element: <RecipePage25 /> },
  { path: PathConstants.RECIPEPAGE26, element: <RecipePage26 /> },
  { path: PathConstants.RECIPEPAGE27, element: <RecipePage27 /> },
  { path: PathConstants.RECIPEPAGE28, element: <RecipePage28 /> },
]
export default routes;