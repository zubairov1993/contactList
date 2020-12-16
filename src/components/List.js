import React from "react";
import axios from "axios";
import Contact from "./Contact";
import AddContact from "./AddContact";

import {
  makeStyles,
  Grid,
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
  searchInput: {
    margin: 10,
    "& label": {
      fontSize: "0.9rem",
    },
  },
});

function List({ items }) {
  const { lists, setLists } = items;
  const [valueName, setValueName] = React.useState("");
  const [valueEmail, setValueEmail] = React.useState("");
  const [valuePhone, setValuePhone] = React.useState("");
  const [valueCity, setValueCity] = React.useState("");
  const [valueCompany, setValueCompany] = React.useState("");
  const [search, setSearch] = React.useState("");
  const [visiblePopup, setVisiblePopup] = React.useState(false);

  // Фильтрация контактов
  let filteredContacts = lists.filter((contact) => {
    return (
      contact.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
      contact.phone.indexOf(search) !== -1
    );
  });
  // Фильтрация контактов

  // Добавление контакта
  const addList = () => {
    axios
      .post("http://jsonplaceholder.typicode.com/users", {
        name: valueName,
        email: valueEmail,
        phone: valuePhone,
        address: {
          city: valueCity,
        },
        company: {
          name: valueCompany,
        },
      })
      .then(({ data }) => {
        const newList = [...lists, data];
        setLists(newList);
        onClose();
      });
  };
  // Добавление контакта

  // Удаление контакта
  const removeContact = (contact) => {
    if (window.confirm("Вы точно хотите удалить?")) {
      axios
        .delete("http://jsonplaceholder.typicode.com/users/" + contact.id)
        .then(() => {
          const newList = lists.filter((item) => item.id !== contact.id);
          setLists(newList);
        });
    }
  };
  // Удаление контакта

  // Изменение контакта
  const onChanged = (id, value) => {
    const newList = lists.map((item) => {
      if (item.id === id) {
        if (item.name === value) {
          item.name = window.prompt("Внесите изменения", value);
        }
        if (item.email === value) {
          item.email = window.prompt("Внесите изменения", value);
        }
        if (item.phone === value) {
          item.phone = window.prompt("Внесите изменения", value);
        }
        if (item.address.city === value) {
          item.address.city = window.prompt("Внесите изменения", value);
        }
        if (item.company.name === value) {
          item.company.name = window.prompt("Внесите изменения", value);
        }
        axios.patch("http://jsonplaceholder.typicode.com/users/" + id, item);
      }
      return item;
    });
    setLists(newList);
  };
  // Изменение контакта

  // Закрытие Popup
  const onClose = () => {
    setVisiblePopup(false);
  };
  // Закрытие Popup

  const classes = useStyles();

  return (
    <Grid>
      <Grid className={classes.search}>
        <FormControl className={classes.margin}>
          <TextField
            className={classes.searchInput}
            label="Поиск по Email и Телефону"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value.substr(0, 20))}
          />
        </FormControl>
        <AddContact
          items={{
            setValueName,
            setValueEmail,
            setValuePhone,
            setValueCity,
            setValueCompany,
            visiblePopup,
            setVisiblePopup,
            addList,
            onClose,
          }}
        />
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <b>Имя</b>
              </TableCell>
              <TableCell>
                <b>Электроный адрес</b>
              </TableCell>
              <TableCell>
                <b>Телефон</b>
              </TableCell>
              <TableCell>
                <b>Город</b>
              </TableCell>
              <TableCell>
                <b>Компания</b>
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
                    onChanged,
                    removeContact,
                  }}
                  key={contact.name}
                />
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default List;
