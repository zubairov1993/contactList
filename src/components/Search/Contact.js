import React from "react";
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

function Contact({ contact }) {
  return (
    <TableRow key={contact.name}>
      <TableCell component="th" scope="row">
        <InputBase defaultValue={contact.surname} />
      </TableCell>
      <TableCell component="th" scope="row">
        <InputBase defaultValue={contact.name} />
      </TableCell>
      <TableCell component="th" scope="row">
        <InputBase defaultValue={contact.patronymic} />
      </TableCell>
      <TableCell align="center">
        <InputBase defaultValue={contact.email} />
      </TableCell>
      <TableCell align="center">
        <InputBase defaultValue={contact.phone} />
      </TableCell>
      <TableCell align="left">
        <InputBase defaultValue={contact.status} />
      </TableCell>

      <TableCell>
        <IconButton>
          <CreateIcon color="primary" />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default Contact;
