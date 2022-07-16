import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "25ch",
    backgroundColor: "#f5f5f5",
  },
  input: {
    backgroundColor: "#f5f5f5",
    width: "25ch",
  },
}));

export { useStyles };