import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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

function List({ list, overLoad }) {
  const [name, setName] = React.useState("");
  const [surName, setSurName] = React.useState("");
  const [patronymic, setPatronymic] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [status, setStatus] = React.useState("");

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

  return (
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
          {list.map((contact) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
