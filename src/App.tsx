'use client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/homePage";
import { Register } from "./pages/Register";
import { Login } from "./pages/newRegister";
import  { Dashboard }  from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/HomePage",
    element: <HomePage />,
  },
  {
    path: "/Login",
    element: <Register/>,
  },
  {
    path: "/Register",
    element: <Login/>,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
]);

export function App() {
 return(
  <RouterProvider router={router} />
 )
}


