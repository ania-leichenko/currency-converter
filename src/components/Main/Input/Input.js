import React from "react";
import { useStyles } from "./InputCss";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

export default function Input() {
  const classes = useStyles();
  const [amount, setAmount] = React.useState("");

  const onChangeAmount = (event) => {
    setAmount(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl fullWidth className={classes.input} variant="filled">
        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
        <FilledInput
          id="filled-adornment-amount"
          value={amount}
          onChange={onChangeAmount}
        />
      </FormControl>
    </form>
  );
}
