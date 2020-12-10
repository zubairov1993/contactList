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
  serchInput: {
    margin: 20,
    paddingRight: 10,
  },
});

function List() {
  const [lists, setLists] = React.useState("");
  const [name, setName] = React.useState("");
  const [surName, setSurName] = React.useState("");
  const [patronymic, setPatronymic] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [search, setSearch] = React.useState("");

  React.useEffect(() => {
    axios.get("http://localhost:3001/lists").then(({ data }) => {
      let filteredContacts = data.filter((contact) => {
        return (
          contact.email.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
          contact.phone.indexOf(search) !== -1
        );
      });
      setLists(filteredContacts);
    });
  }, []);

  const removeContact = (contact) => {
    if (window.confirm("Вы точно хотите удалить?")) {
      axios.delete("http://localhost:3001/lists/" + contact.id).then(() => {
        onRemove(contact.id);
      });
    }
  };

  const onRemove = (id) => {
    console.log(id);
    const newList = lists.filter((item) => item.id !== id);
    setLists(newList);
  };

  const classes = useStyles();

  return (
    <Grid>
      <Grid className={classes.search}>
        <FormControl className={classes.margin}>
          <TextField
            className={classes.serchInput}
            label="Поиск по Email и Телефону"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value.substr(0, 20))}
          />
        </FormControl>
        <AddContact items={{ lists, setLists }} />
      </Grid>
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

              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          {lists ? (
            <TableBody>
              {lists.map((contact) => {
                return (
                  <Contact
                    items={{
                      contact,
                      setName,
                      setSurName,
                      setPatronymic,
                      setEmail,
                      setPhone,
                      // onChanged,
                      removeContact,
                    }}
                    key={contact.name}
                  />
                );
              })}
            </TableBody>
          ) : (
            <TableBody>....loading</TableBody>
          )}
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default List;
