import React from "react";
import Contact from "./Contact";
import AddContact from "./AddContact";

import {
  makeStyles,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

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
  search: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function List({ list, overLoad }) {
  const [name, setName] = React.useState("");
  const [surName, setSurName] = React.useState("");
  const [patronymic, setPatronymic] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [filtered, setFiltered] = React.useState("");

  const onChanged = (contact) => {
    const index = list.indexOf(contact);

    if (name !== "") {
      list[index].name = name;
    } else {
      list[index].name = list[index].name;
    }

    if (surName !== "") {
      list[index].surname = surName;
    } else {
      list[index].surname = list[index].surname;
    }

    if (patronymic !== "") {
      list[index].patronymic = patronymic;
    } else {
      list[index].patronymic = list[index].patronymic;
    }

    if (email !== "") {
      list[index].email = email;
    } else {
      list[index].email = list[index].email;
    }

    if (phone !== "") {
      list[index].phone = phone;
    } else {
      list[index].phone = list[index].phone;
    }

    if (status !== "") {
      list[index].status = status;
    } else {
      list[index].status = list[index].status;
    }

    localStorage.setItem("persons", JSON.stringify(list));
    setName("");
    setSurName("");
    setPatronymic("");
    setEmail("");
    setPhone("");
    setStatus("");
    overLoad();
  };

  const onRemove = (contact) => {
    for (let i = 0; i < list.length; i++) {
      let items = list[i];
      if (items.name == contact.name) {
        list.splice(i, 1);
      }
    }

    localStorage.setItem("persons", JSON.stringify(list));
    overLoad();
  };
  const classes = useStyles();

  let filteredContacts = list.filter((contact) => {
    return (
      contact.status.indexOf(search) !== -1 ||
      contact.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      contact.phone.indexOf(search) !== -1
      // contact.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      // contact.surname.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      // contact.patronymic.toLowerCase().indexOf(search.toLowerCase()) !== -1
    );
  });

  return (
    <div>
      <div className={classes.search}>
        <FormControl className={classes.margin}>
          <TextField
            label="Поиск по Email и Телефону"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value.substr(0, 20))}
          />
        </FormControl>

        <FormControl size="small" variant="outlined" className={classes.margin}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            onChange={(e) => setSearch(e.target.value.substr(0, 20))}
            helperText="Please select your currency"
            variant="outlined"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"client"}>Client</MenuItem>
            <MenuItem value={"partner"}>Partner</MenuItem>
          </TextField>
          {/* <InputLabel id="demo-simple-select-outlined-label">
            Фильтрация
          </InputLabel>
          <Select
            className={classes.select}
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            onChange={(e) => setFiltered(e.target.value.substr(0, 20))}
            label="Выберите статус"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"client"}>Client</MenuItem>
            <MenuItem value={"partner"}>Partner</MenuItem>
          </Select> */}
        </FormControl>
        <AddContact overLoad={overLoad} contacts={list} />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <b>Фамилия</b>
              </TableCell>
              <TableCell>
                <b>Имя</b>
              </TableCell>
              <TableCell>
                <b>Отчество</b>
              </TableCell>
              <TableCell>
                <b>Электроный адрес</b>
              </TableCell>
              <TableCell>
                <b>Телефон</b>
              </TableCell>
              <TableCell>
                <b>Статус</b>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredContacts.map((contact) => {
              return (
                <Contact
                  items={{
                    contact,
                    setName,
                    setSurName,
                    setPatronymic,
                    setEmail,
                    setPhone,
                    setStatus,
                    onChanged,
                    onRemove,
                  }}
                  key={contact.name}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default List;
