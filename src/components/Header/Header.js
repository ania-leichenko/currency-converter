import React from "react";
import { useStyles } from "./HeaderCss";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import UahToCurrencyCard from "./UahToCurrencyCard/UahToCurrencyCard";

function Header({ rates }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Currency Converter
          </Typography>
          <UahToCurrencyCard
            currency="USD"
            countryFlag="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
            value={rates.USD.UAH}
          />
          <UahToCurrencyCard
            currency="EUR"
            countryFlag="http://purecatamphetamine.github.io/country-flag-icons/3x2/EU.svg"
            value={rates.EUR.UAH}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export { Header };
