import React from "react";
import Aboutus from "./Pages/Aboutus";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import TamplatePage from "./Pages/TamplatePage";
import Portfolio1 from "./Components/Portfolio1/Portfolio1";
import Portfolio2 from "./Components/Portfolio2/Portfolio2";
import Home from "./Pages/home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<Aboutus />} />
        <Route path="template" element={<TamplatePage />} />
        <Route path="portfolio1" element={<Portfolio1 />} />
        <Route path="portfolio2" element={<Portfolio2 />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
      </Route>
    </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
