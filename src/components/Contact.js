import React from "react";
import {
  makeStyles,
  IconButton,
  TableCell,
  TableRow,
  FormControl,
  Button,
  TextField,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";

const useStyles = makeStyles((theme) => ({
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
  margin: {
    margin: theme.spacing(0.5),
    backgroundColor: "#ffffff",
    borderRadius: 4,
  },
  btn__add: {
    margin: 20,
  },
  btn__close: {
    width: 15,
    height: 15,
    background: "#3f51b5",
    position: "absolute",
    right: -10,
    top: -10,

    "& svg": {
      fontSize: 15,
      color: "#ffffff",
    },
  },
  popup: {
    display: "inline-flex",
    flexDirection: "column",
    position: "absolute",
    backgroundColor: "#fff",
    zIndex: 99,
    borderRadius: 5,
    right: 160,
    top: 25,
    border: "1px solid #ccc",
  },
  select: {
    zIndex: 100,
  },
}));

const Contact = ({ items }) => {
  const {
    contact,
    setName,
    setSurName,
    setPatronymic,
    setEmail,
    setPhone,
    onChanged,
    removeContact,
  } = items;

  const [visiblePopup, setVisiblePopup] = React.useState(false);

  const onClose = () => {
    setVisiblePopup(false);
  };

  const classes = useStyles();
  return (
    <TableRow key={contact.name}>
      <TableCell component="th" scope="row">
        {contact.surname}
      </TableCell>
      <TableCell component="th" scope="row">
        {contact.name}
      </TableCell>
      <TableCell component="th" scope="row">
        {contact.patronymic}
      </TableCell>
      <TableCell component="th" scope="row">
        {contact.email}
      </TableCell>
      <TableCell component="th" scope="row">
        {contact.phone}
      </TableCell>

      <TableCell className={classes.btn__icon}>
        <IconButton
          className={classes.btn__icon}
          onClick={() => {
            setVisiblePopup(true);
          }}
        >
          <CreateIcon color="primary" className={classes.icon} />
        </IconButton>
      </TableCell>
      <TableCell className={classes.btn__icon} align="center">
        <IconButton
          className={classes.btn__icon}
          onClick={() => removeContact(contact)}
        >
          <DeleteIcon className={classes.icon} />
        </IconButton>
      </TableCell>
      <div className={classes.contact}>
        {visiblePopup && (
          <div className={classes.popup}>
            <FormControl className={classes.margin}>
              <TextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onChange={(e) => setSurName(e.target.value)}
                defaultValue={contact.surname}
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <TextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onChange={(e) => setName(e.target.value)}
                defaultValue={contact.name}
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <TextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onChange={(e) => setPatronymic(e.target.value)}
                defaultValue={contact.patronymic}
              />
            </FormControl>
            <FormControl className={classes.margin}>
              <TextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onChange={(e) => setEmail(e.target.value)}
                defaultValue={contact.email}
              />
            </FormControl>

            <FormControl className={classes.margin}>
              <TextField
                id="outlined-size-small"
                variant="outlined"
                size="small"
                onChange={(e) => setPhone(e.target.value)}
                defaultValue={contact.phone}
              />
            </FormControl>
            <IconButton
              onClick={onClose}
              className={classes.btn__close}
              aria-label="delete"
            >
              <ClearOutlinedIcon />
            </IconButton>
            <Button
              onClick={() => onChanged(contact)}
              variant="contained"
              color="primary"
            >
              Изменить контакт
            </Button>
          </div>
        )}
      </div>
    </TableRow>
  );
};

export default Contact;
