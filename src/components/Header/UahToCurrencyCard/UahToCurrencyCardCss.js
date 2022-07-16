import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "270px",
      height: "45px",
      display: "flex",
      alignItems: "center",
      margin: "10px",
    },
    image: {
      height: "50px",
      width: "50px",
      margin: "5px",
    },
  })
);

export {  useStyles };