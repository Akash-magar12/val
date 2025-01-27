import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./Pages/Applayout";
import Agent from "./Pages/Agent";
import Weapon from "./Pages/Weapon";
import AgentDetail from "./Pages/AgentDetail";
import Maps from "./Pages/Maps";
import Home from "./Pages/Home";
import Bundles from "./Pages/Bundles";
import MapDetails from "./Pages/MapDetails";
import BundleDetail from "./Pages/BundleDetail";
import WeaponDetails from "./Pages/WeaponDetails";
import SkinDetails from "./Pages/SkinDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        { path: "/", element: <Home /> },

        { path: "/agent", element: <Agent /> },
        { path: "/weapon", element: <Weapon /> },
        { path: "/maps", element: <Maps /> },
        { path: "/bundle", element: <Bundles /> },
        { path: "/agent/:id", element: <AgentDetail /> },
        { path: "/maps/:id", element: <MapDetails /> },
        { path: "/maps/:id", element: <MapDetails /> },
        { path: "/bundle/:id", element: <BundleDetail /> },
        { path: "/weapon/:id", element: <WeaponDetails /> },
        { path: "/weaponSkin/:id", element: <SkinDetails /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
