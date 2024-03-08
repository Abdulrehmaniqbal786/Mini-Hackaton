import { Button } from "@mui/material";
import React from "react";

export const Custom_Button = (props) => {
  return (
    <Button sx={{ width: "100%" }} {...props} variant="outlined">
      {props.children}
    </Button>
  );
};
