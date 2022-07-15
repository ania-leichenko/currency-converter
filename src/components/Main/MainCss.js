import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    h1: {
      color: "#f5f5f5",
      display: "flex",
      justifyContent: "center",
    },
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      width: 500,
      height: 300,
      background: "#3f51b5",
      marginTop: "150px",
    },
  })
);

export { useStyles };