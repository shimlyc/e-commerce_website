import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import UserLayout from '../user/UserLayout';
import AdminHome from '../user/pages/Home/Home';
import Signup from "../user/components/signup/Signup";
import Cart from "../user/components/cart/Cart";
import Wishlist from "../user/components/wishlist/Wishlist";
// import Minicards from "../user/Minicards";

  

function Routes() {

    const router = createBrowserRouter([
        {
          path: "/",
          element: <UserLayout/>,
          children:[
            {
                path:'',
                element:<AdminHome/>
            },
            
          ]
          
        },
        {
          path:"signup",
          element:<Signup/>
        },
        {
          path:"cart",
          element:<Cart/>
        },
        {
          path:"wishlist",
          element:<Wishlist/>
        }
      ]);

  return (
    <RouterProvider router={router} />
  )
}

export default Routes