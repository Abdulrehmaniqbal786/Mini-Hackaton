import { Button, CircularProgress } from "@mui/material";
import React, { useEffect } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home } from "../../pages/Home";
import { Layout } from "../../components/Layout";
import { Login } from "../../pages/Login";
import { Signup } from "../../pages/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { set_user_auth } from "../../store/slices/user_auth_slice";
import { Dashboard } from "../../pages/Dashboard";
import { Public_Routes } from "./Public_Routes";
import { Private_Routes_Seller } from "./Private_Routes_Seller";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="" element={<Home />} />

      <Route element={<Public_Routes />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>

      <Route element={<Private_Routes_Seller />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Route>
  )
);

export const Router_App = () => {
  const dispatch = useDispatch();
  const user_auth_state = useSelector((state) => state.user_auth);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        dispatch(set_user_auth({ data: {}, auth: true }));
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(set_user_auth({ data: {}, auth: false }));
      }
    });
  }, []);

  return (
    <>
      {user_auth_state.auth_check_loading ? (
        <div className="h-[100dvh] grid place-items-center">
          <CircularProgress />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
};
