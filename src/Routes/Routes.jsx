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
import ManageItems from "../Pages/DashBoard/ManageItems/ManageItems";
import UpdateItem from "../Pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/DashBoard/UserHome/UserHome";
import AdminHome from "../Pages/DashBoard/AdminHome/AdminHome";


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
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element:<Payment></Payment>
        },
        {
          path: 'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },


        // admin 
          {
            path:'adminHome',
            element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
          },
          {
            path:'allUsers',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
          },

          {
            path:'addItems',
            element:<AdminRoute><AddItems></AddItems></AdminRoute>
          },
          {
            path:'manageItems',
            element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
          },
          {
            path:'updateItem/:id',
            element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
            loader:({params})=>fetch(`http://localhost:5000/menu/${params.id}`)
          },
      ]
    }
  ]);

