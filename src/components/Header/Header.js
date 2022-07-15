import React from "react";
import { useStyles } from "./HeaderCss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CardUSD  from './Cards/CardForUSD';
import CardEUR from "./Cards/CardForEUR";


function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Currency Converter
          </Typography>
          <CardUSD></CardUSD>
          <CardEUR></CardEUR>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { Header };
