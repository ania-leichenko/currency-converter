import React from "react";
import { useStyles } from "./UahToCurrencyCardCss";
import Card from "@material-ui/core/Card";

export default function UahToCurrencyCard({ currency, value, countryFlag }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img className={classes.image} alt={currency} src={countryFlag} />1{" "}
      {currency} ---&gt; {value} UAH
      <img
        className={classes.image}
        alt="Ukraine"
        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/UA.svg"
      />
    </Card>
  );
}
