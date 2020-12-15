import React from "react";

import {
  Button,
  FormControl,
  TextField,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAdd";

function AddContact({ items }) {
  const {
    setValueSurName,
    setValueName,
    setValuePatronymic,
    setValueEmail,
    setValuePhone,
    visiblePopup,
    setVisiblePopup,
    addList,
    onClose,
  } = items;

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0.5),
      backgroundColor: "#ffffff",
      borderRadius: 4,
    },
    btn__add: {
      height: 40,
      margin: 10,
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
    contact: {
      position: "relative",
    },
    popupAdd: {
      display: "inline-flex",
      flexDirection: "column",
      position: "absolute",
      backgroundColor: "#fff",
      zIndex: 99,
      borderRadius: 5,
      left: -235,
      top: 50,
      border: "1px solid #ccc",
    },
    select: {
      zIndex: 100,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.contact}>
      <Button
        onClick={() => setVisiblePopup(!visiblePopup)}
        variant="contained"
        color="primary"
        className={classes.btn__add}
        endIcon={<PersonAddIcon />}
      >
        Добавить
      </Button>
      {visiblePopup && (
        <div className={classes.popupAdd}>
          <FormControl className={classes.margin}>
            <TextField
              label="Введите Фамилию"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onChange={(e) => setValueSurName(e.target.value)}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <TextField
              label="Введите Имя"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onChange={(e) => setValueName(e.target.value)}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <TextField
              label="Введите отчество"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onChange={(e) => setValuePatronymic(e.target.value)}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <TextField
              label="Введите Email"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onChange={(e) => setValueEmail(e.target.value)}
            />
          </FormControl>
          <FormControl className={classes.margin}>
            <TextField
              label="Введите номер телефона"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onChange={(e) => setValuePhone(e.target.value)}
            />
          </FormControl>
          <IconButton
            onClick={onClose}
            className={classes.btn__close}
            aria-label="delete"
          >
            <ClearOutlinedIcon />
          </IconButton>
          <Button onClick={addList} variant="contained" color="primary">
            Добавить контакт
          </Button>
        </div>
      )}
    </div>
  );
}

export default AddContact;
