import React from "react";
import { useStyles } from "./SelectCss";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function NativeSelects() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("");

  const onChangeCurrency = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={currency}
          onChange={onChangeCurrency}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>UAN</MenuItem>
          <MenuItem>USD</MenuItem>
          <MenuItem>EUR</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
