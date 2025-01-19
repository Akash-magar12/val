import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./Pages/Applayout";
import Agent from "./Pages/Agent";
import Weapon from "./Pages/Weapon";
import AgentDetail from "./Pages/AgentDetail";
import Maps from "./Pages/Maps";
import Home from "./Pages/Home";

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
        { path: "/agent/:id", element: <AgentDetail /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
