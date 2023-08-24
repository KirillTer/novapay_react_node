import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "../App";
import ErrorPage from "../pages/errorPage/errorPage";
import Login from "../pages/statistic/Login";
import PostContainer from "../pages/orders/PostContainer";
import Registration from "../pages/statistic/Registration";
import { useAppSelector } from '../hooks/redux';

export enum RouteNames {
  HOME = '/',
  LOGIN = '/login',
  LOGOUT = '/logout',
  REGISTRATION = '/registration',
  USERS = '/users',
  ANYPATH = '*'
}
  
const AppRouter = () => {

  const { isAuth } = useAppSelector(state => state.authReducer)

  const publicRouter = createBrowserRouter([
    {
      path: RouteNames.HOME,
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: RouteNames.LOGIN,
          element: <Login />,
        },
        {
          path: RouteNames.REGISTRATION,
          element: <Registration />
        },
        {
          path: RouteNames.ANYPATH,
          element: <ErrorPage />
        },
      ],
    }
  ]);

  const privateRouter = createBrowserRouter([
    {
      path: RouteNames.HOME,
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <PostContainer />
        },
        {
          path: RouteNames.USERS,
          element: <PostContainer />
        },
        {
          path: RouteNames.LOGIN,
          element: <Login />
        },
        {
          path: RouteNames.REGISTRATION,
          element: <Registration />
        },
        {
          path: RouteNames.ANYPATH,
          element: <ErrorPage />
        },
      ],
    }
  ]);

  return (
    <RouterProvider router={isAuth ? privateRouter : publicRouter} />
  );
}
 
export default AppRouter;