import React from "react";
import Input  from "./Input/Input";
import Select from "./Select/Select";
import { useStyles } from "./MainCss";
import Paper from "@material-ui/core/Paper";

function Main() {
  const classes = useStyles();
  
  return (
    <Paper className={classes.paper}>
      <h1 className={classes.h1}>Convert currency now!</h1>
      <div className={classes.root}>
        <div>
          <Input />
          <Select />
        </div>
        <div>
          <Input />
          <Select />
        </div>
      </div>
    </Paper>
  );
}

export { Main };
