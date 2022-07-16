import React, { useState } from "react";
import CurrencyInput from "./CurrencyInput/CurrencyInput";
import convert from "../../utils/convert";
import { useStyles } from "./MainCss";
import Paper from "@material-ui/core/Paper";

function Main({ rates }) {
  const classes = useStyles();
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [currency1, setCurrency1] = useState("UAH");
  const [currency2, setCurrency2] = useState("UAH");

  function handleAmount1Change(amount) {
    setAmount2(convert(rates, amount, currency1, currency2));
    setAmount1(amount);
  }

  function handleCurrency1Change(currency) {
    setAmount2(convert(rates, amount1, currency, currency2));
    setCurrency1(currency);
  }

  function handleAmount2Change(amount) {
    setAmount1(convert(rates, amount, currency2, currency1));
    setAmount2(amount);
  }

  function handleCurrency2Change(currency) {
    setAmount1(convert(rates, amount2, currency, currency1));
    setCurrency2(currency);
  }

  const currencies = Object.keys(rates);

  return (
    <Paper className={classes.paper}>
      <h1 className={classes.h1}>Convert currency now!</h1>
      <div className={classes.root}>
        <div>
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            amount={amount1}
            currency={currency1}
            currencies={currencies}
          />
        </div>
        <div>
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            amount={amount2}
            currency={currency2}
            currencies={currencies}
          />
        </div>
      </div>
    </Paper>
  );
}

export { Main };
