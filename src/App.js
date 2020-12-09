import React from "react";
import List from "./components/List/List";
import AddContact from "./components/AddContact/AddContact";

function App() {
  let lists = [
    {
      name: "Иван",
      surname: "Иванов",
      patronymic: "Иванович",
      email: "ivan@mal.com",
      password: "ivan",
      phone: "88000000000",
      status: "admin",
    },
    {
      name: "Петр",
      surname: "Петров",
      patronymic: "Петрович",
      email: "petr@mal.com",
      password: "petr",
      phone: "88000000000",
      status: "client",
    },
    {
      name: "Александр",
      surname: "Александров",
      patronymic: "Александрич",
      email: "alex@mal.com",
      password: "alex",
      phone: "88000000000",
      status: "partner",
    },
    {
      name: "Алексей",
      surname: "Алексеев",
      patronymic: "Алексеевич",
      email: "petr@mal.com",
      password: "alex",
      phone: "88000000000",
      status: "client",
    },
    {
      name: "Сергей",
      surname: "Сергеев",
      patronymic: "Сергеевич",
      email: "petr@mal.com",
      password: "",
      phone: "88000000000",
      status: "partner",
    },
    {
      name: "Мария",
      surname: "Иванова",
      patronymic: "Ивановна",
      email: "petr@mal.com",
      password: "",
      phone: "88000000000",
      status: "client",
    },
  ];

  const [persons, setPersons] = React.useState([]);
  const [contacts, setContacts] = React.useState("");

  localStorage.setItem("lists", JSON.stringify(persons));

  React.useEffect(() => {
    setPersons(lists);
  }, []);

  React.useEffect(() => {
    let recivContacts = localStorage.getItem("lists");
    let list = JSON.parse(recivContacts);
    setContacts(list);
  }, [persons]);

  const overLoad = () => {
    let list = JSON.parse(localStorage.getItem("persons"));
    setContacts(list);
  };

  return (
    <div className="App">
      {contacts ? (
        <AddContact overLoad={overLoad} contacts={contacts} />
      ) : (
        "...Loading"
      )}
      {/* {contacts ? <List overLoad={overLoad} list={contacts} /> : "...Loading"} */}
    </div>
  );
}

export default App;
