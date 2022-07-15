import { createStyles, makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  })
);

export { useStyles };