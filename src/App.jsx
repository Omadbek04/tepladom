import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import Root from "./layout/Root";
import Basket from "./components/Basket";
import Liked from "./components/Liked";
import Home from "./components/Home";
import Categories from "./components/Categories";
import ItemsSite from "./components/itemsSite";
import SiteLayout from "./layout/SiteLayout";
import SlietDetaile from "./components/SlietDetaile";
import Novinki from "./components/Novinki";
import Aksiya from "./components/Aksiya";
import Postavshikam from "./components/Postavshikam";
import Contact from "./components/Contact";
import Vozvrat from "./components/Vozvrat";
import Filter from "./components/Filter";
import FilterAll from "./components/filter/Filter-All";
import Register from "./features/register/Register";
import Login from "./features/login/Login";
import Account from "./features/account/Account";
import PlacingOrder from "./features/placingAnOrder/PlacingOrder";

function PrivetRout({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    !user && navigate("/register");
  }, []);
  return children;
}

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "basket",
          element: <Basket />,
        },
        {
          path: "account",
          element: (
            <PrivetRout>
              <Account />
            </PrivetRout>
          ),
        },
        {
          path: "liked",
          element: <Liked />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "novinki",
          element: <Novinki />,
        },
        {
          path: "aksiya",
          element: <Aksiya />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "vozvrat",
          element: <Vozvrat />,
        },
        {
          path: "postavshikam",
          element: <Postavshikam />,
        },
        {
          path: "itemsSite",
          element: <SiteLayout />,
          children: [
            {
              index: true,
              element: <ItemsSite />,
            },
            {
              path: ":id",
              element: <SlietDetaile />,
            },
          ],
        },
        {
          path: "filter",
          element: <Filter />,
        },
        {
          path: "filterShowMore",
          element: <FilterAll />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
