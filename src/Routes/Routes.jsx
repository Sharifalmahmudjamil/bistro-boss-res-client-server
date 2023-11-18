import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayOut from "../LayOut/MainLayOut";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../LayOut/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";


 export const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
      ]
    },
    {
      path: 'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },


        // admin 
          {
            path:'allUsers',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
          },

          {
            path:'addItems',
            element:<AdminRoute><AddItems></AddItems></AdminRoute>
          }
      ]
    }
  ]);

