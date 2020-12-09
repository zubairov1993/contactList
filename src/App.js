import React from "react";
import List from "./components/List";

function App() {
  let lists = [
    {
      name: "Иван",
      surname: "Иванов",
      patronymic: "Иванович",
      email: "ivan@mccccal.com",
      password: "ivan",
      phone: "8947382903",
      status: "admin",
    },
    {
      name: "Петр",
      surname: "Петров",
      patronymic: "Петрович",
      email: "petr@msdssal.com",
      password: "petr",
      phone: "874932992734",
      status: "client",
    },
    {
      name: "Александр",
      surname: "Александров",
      patronymic: "Александрич",
      email: "alex@madwawl.com",
      password: "alex",
      phone: "88757847733",
      status: "partner",
    },
    {
      name: "Алексей",
      surname: "Алексеев",
      patronymic: "Алексеевич",
      email: "petr@wadmal.com",
      password: "alex",
      phone: "8665647733",
      status: "client",
    },
    {
      name: "Сергей",
      surname: "Сергеев",
      patronymic: "Сергеевич",
      email: "petr@msal.com",
      password: "",
      phone: "899878585722",
      status: "partner",
    },
    {
      name: "Мария",
      surname: "Иванова",
      patronymic: "Ивановна",
      email: "petr@aamal.com",
      password: "",
      phone: "8i985968332",
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
      {contacts ? <List overLoad={overLoad} list={contacts} /> : "...Loading"}
    </div>
  );
}

export default App;
