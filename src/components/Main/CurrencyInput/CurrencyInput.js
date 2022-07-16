import React from "react";
import { useStyles } from "./CurrencyInputCss";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FilledInput from "@material-ui/core/FilledInput";

export default function CurrencyInput({
  amount,
  currency,
  onAmountChange,
  onCurrencyChange,
  currencies,
}) {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <FormControl fullWidth className={classes.input} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            value={amount}
            onChange={(e) => onAmountChange(e.target.value)}
          />
        </FormControl>
      </form>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencies.map((cy) => (
            <MenuItem value={cy} key={cy}>
              {cy}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
