import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function PostForm({ onChange, title, text }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          name="title"
          id="standard-multiline-flexible"
          label="Multiline"
          multiline
          rowsMax={4}
          value={title}
          onChange={onChange}
        />
        <TextField
          name="text"
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          value={text}
          onChange={onChange}
        />
      </div>
    </form>
  );
}
