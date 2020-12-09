import React from "react";
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

function AddContact({ contacts, overLoad }) {
  const [list, setList] = React.useState("");
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [valueSurName, setValueSurName] = React.useState("");
  const [valueName, setValueName] = React.useState("");
  const [valuePatronymic, setValuePatronymic] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePhone, setValuePhone] = React.useState("");
  const [valueStatus, setValueStatus] = React.useState("");
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0.5),
      backgroundColor: "#ffffff",
      borderRadius: 4,
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

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    setList(contacts);
  });
  const addList = () => {
    const contacts = {
      name: valueName,
      surname: valueSurName,
      patronymic: valuePatronymic,
      email: valueEmail,
      password: values.password,
      phone: valuePhone,
      status: valueStatus,
    };

    const newList = [...list, contacts];
    localStorage.setItem("persons", JSON.stringify(newList));

    setVisiblePopup(false);
    overLoad();
  };

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
          <FormControl
            size="small"
            className={classes.margin}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
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
          <FormControl
            size="small"
            variant="outlined"
            className={classes.margin}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Выберите статус
            </InputLabel>
            <Select
              className={classes.select}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              onChange={(e) => setValueStatus(e.target.value)}
              label="Выберите статус"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"client"}>Client</MenuItem>
              <MenuItem value={"partner"}>Partner</MenuItem>
            </Select>
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
