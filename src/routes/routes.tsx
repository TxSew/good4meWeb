import Cart from "../pages/client/Cart/Cart";
import Category from "../pages/client/Category/Category";
import Home from "../pages/client/Home/Home";
import Login from "../pages/client/Login/Login";
import Register from "../pages/client/Register/Register";
//  Public

const PublicRouter = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
  {
    path: "/category",
    element: Category,
  },
  {
   path: "/cart",
   element: Cart,
 },
];

export { PublicRouter };
