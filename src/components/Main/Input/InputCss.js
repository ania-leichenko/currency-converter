import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
    input: {
      backgroundColor: "#f5f5f5",
      width: "25ch",
    },
  })
);

export { useStyles };