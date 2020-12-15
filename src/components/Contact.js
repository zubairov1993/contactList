import React from "react";
import { IconButton, TableCell, TableRow } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

const Contact = ({ items }) => {
  const { contact, onChanged, removeContact } = items;

  return (
    <TableRow key={contact.name}>
      <TableCell></TableCell>
      <TableCell component="th" scope="row">
        {contact.surname}
        <IconButton onClick={() => onChanged(contact.id, contact.surname)}>
          <CreateIcon color="primary" />
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {contact.name}
        <IconButton onClick={() => onChanged(contact.id, contact.name)}>
          <CreateIcon color="primary" />
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {contact.patronymic}
        <IconButton onClick={() => onChanged(contact.id, contact.patronymic)}>
          <CreateIcon color="primary" />
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {contact.email}
        <IconButton onClick={() => onChanged(contact.id, contact.email)}>
          <CreateIcon color="primary" />
        </IconButton>
      </TableCell>
      <TableCell component="th" scope="row">
        {contact.phone}
        <IconButton onClick={() => onChanged(contact.id, contact.phone)}>
          <CreateIcon color="primary" />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton onClick={() => removeContact(contact)}>
          <DeleteIcon color="secondary" />
        </IconButton>
      </TableCell>
      <TableCell></TableCell>
    </TableRow>
  );
};

export default Contact;
