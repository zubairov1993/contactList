import React from "react";
import axios from "axios";

import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  IconButton,
  OutlinedInput,
  InputAdornment,
  makeStyles,
} from "@material-ui/core";

import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function AddContact({ items }) {
  const { lists, setLists } = items;
  console.log(lists);
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [valueSurName, setValueSurName] = React.useState("");
  const [valueName, setValueName] = React.useState("");
  const [valuePatronymic, setValuePatronymic] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePhone, setValuePhone] = React.useState("");

  const useStyles = makeStyles((theme) => ({
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

  //// Добавление
  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  const addList = () => {
    axios
      .post("http://localhost:3001/lists", {
        name: valueName,
        surname: valueSurName,
        patronymic: valuePatronymic,
        email: valueEmail,
        phone: valuePhone,
      })
      .then(({ data }) => {
        onAddList(data);
        onClose();
      });
  };
  //// Добавление

  const onClose = () => {
    setVisiblePopup(false);
  };
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
        <div className={classes.popup}>
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
          <Button
            onClick={addList}
            variant="contained"
            color="primary"
            // className={classes.btn__add_contact}
          >
            Добавить контакт
          </Button>
        </div>
      )}
    </div>
  );
}

export default AddContact;
