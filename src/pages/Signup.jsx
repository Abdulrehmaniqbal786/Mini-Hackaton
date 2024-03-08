import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Custom_Input_Field } from "../components/Custom_Input_Field";
import { Custom_Button } from "../components/Custom_Button";
import { Link } from "react-router-dom";
import {
  create_account,
  write_user_data,
} from "../config/firebase/firebase_methods";
import { useDispatch } from "react-redux";
import { set_user_auth } from "../store/slices/user_auth_slice";

export const Signup = () => {
  const [data, setData] = useState({});

  const dispatch = useDispatch();

  const change_handle = (e) => {
    const { id, value } = e.target;

    setData((pre_data) => {
      return { ...pre_data, [id]: value };
    });
  };

  const submit_handle = (e) => {
    e.preventDefault();
    const { email, password } = data;
    create_account(email, password)
      .then((res) => {
        const user_id = res.user.uid;
        write_user_data(user_id, data).then((res) => {
          dispatch(set_user_auth({ data, auth: true }));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-bg_color h-[100dvh] grid place-items-center">
      <Box
        component="form"
        onSubmit={submit_handle}
        className="max-w-md w-[100%] space-y-5 bg-white py-5 px-4 rounded"
      >
        <Typography
          className="text-primary"
          align="center"
          fontWeight="bold"
          fontSize={28}
        >
          {" "}
          Signup
        </Typography>
        <div className="space-y-5">
          <Custom_Input_Field
            required={true}
            id="role"
            label="Role"
            onChange={change_handle}
            placeholder="Enter Role"
            type="text"
          />
          <Custom_Input_Field
            required={true}
            id="first_name"
            label="First Name"
            onChange={change_handle}
            placeholder="Enter First Name"
            type="text"
          />
          <Custom_Input_Field
            required={true}
            id="last_name"
            label="Last Name"
            onChange={change_handle}
            placeholder="Enter Last Name"
            type="text"
          />
          <Custom_Input_Field
            required={true}
            id="email"
            label="Email"
            onChange={change_handle}
            placeholder="Enter email"
            type="email"
          />
          <Custom_Input_Field
            required={true}
            id="password"
            label="Password"
            onChange={change_handle}
            placeholder="Enter password"
            type="password"
          />
        </div>

        <Custom_Button type="submit">Signup</Custom_Button>

        <div className="text-center">
          Don't have account{" "}
          <Link to="/login" className="text-primary underline">
            Login Now
          </Link>
        </div>
      </Box>
    </div>
  );
};
