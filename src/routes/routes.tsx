import Home from "../pages/home/Home";
import ErrorPage from "../pages/error-page/ErrorPage";
import UnderConstruction from "../pages/constuction/UnderConstruction";
import UserMap from "../pages/web-map/UserMap";
import Profile from "../pages/profile/Profile";

export const routes = [
  { path: "/", element: <Home /> },
  { path: "/profile", element: <Profile /> },
  { path: "/locateMe", element: <UserMap/> },
  { path: "/login", element: <UnderConstruction /> },
  {path: '/signup', element: <UnderConstruction /> },
  { path: "/logout", element: <Home /> },
  { path: "*", element: <ErrorPage /> }, // Catch-all undefined routes
];