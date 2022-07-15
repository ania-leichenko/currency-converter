import React from "react";
import { useStyles } from "./CardsCss";
import Card from "@material-ui/core/Card";

export default function CardUSD() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img
        className={classes.image}
        alt="Ukraine"
        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/UA.svg"
      />
      1 UAN ---{">"} 30 USD
      <img
        className={classes.image}
        alt="United States"
        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
      />
    </Card>
  );
}
