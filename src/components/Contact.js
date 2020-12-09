import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    borderTop: "1px solid #cccccc",
  },
  btn__icon: {
    padding: 0,
  },
  icon: {
    cursor: "pointer",
    "&:hover": {
      color: "red",
    },
  },
});

const Contact = ({ items }) => {
  const {
    contact,
    setName,
    setSurName,
    setPatronymic,
    setEmail,
    setPhone,
    setStatus,
    onChanged,
    onRemove,
  } = items;
  const classes = useStyles();
  return (
    <TableRow key={contact.name}>
      <TableCell component="th" scope="row">
        <InputBase
          onChange={(e) => setSurName(e.target.value)}
          defaultValue={contact.surname}
        />
      </TableCell>
      <TableCell component="th" scope="row">
        <InputBase
          onChange={(e) => setName(e.target.value)}
          defaultValue={contact.name}
        />
      </TableCell>
      <TableCell component="th" scope="row">
        <InputBase
          onChange={(e) => setPatronymic(e.target.value)}
          defaultValue={contact.patronymic}
        />
      </TableCell>
      <TableCell align="center">
        <InputBase
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={contact.email}
        />
      </TableCell>
      <TableCell align="center">
        <InputBase
          onChange={(e) => setPhone(e.target.value)}
          defaultValue={contact.phone}
        />
      </TableCell>
      <TableCell align="left">
        <InputBase
          onChange={(e) => setStatus(e.target.value)}
          defaultValue={contact.status}
        />
      </TableCell>

      <TableCell className={classes.btn__icon}>
        <IconButton
          className={classes.btn__icon}
          onClick={() => onChanged(contact)}
        >
          <CreateIcon color="primary" className={classes.icon} />
        </IconButton>
      </TableCell>
      <TableCell className={classes.btn__icon} align="center">
        <IconButton
          className={classes.btn__icon}
          onClick={() => onRemove(contact)}
        >
          <DeleteIcon className={classes.icon} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Contact;
