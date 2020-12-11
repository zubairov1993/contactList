import React from "react";
import axios from "axios";
import List from "./components/List";

function App() {
  const [lists, setLists] = React.useState("");

  React.useEffect(() => {
    axios.get("http://localhost:3001/lists").then(({ data }) => {
      setLists(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Список Конактов</h1>
      {lists ? <List items={{ lists, setLists }} /> : "...Loading"}
    </div>
  );
}

export default App;
