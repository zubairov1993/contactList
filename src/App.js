import React from "react";
import axios from "axios";
import List from "./components/List";
import Typography from "@material-ui/core/Typography";

function App() {
  const [lists, setLists] = React.useState("");
  // Получение локально через json-server,  файл в assets
  React.useEffect(() => {
    axios.get("http://localhost:3001/lists").then(({ data }) => {
      setLists(data);
    });
  }, []);

  // Получение локально через json-server,  файл в assets

  // Получение локально через json-server,  файл в assets
  React.useEffect(() => {
    axios.get("http://localhost:3001/lists").then(({ data }) => {
      setLists(data);
    });
  }, []);

  // Получение локально через json-server,  файл в assets

  return (
    <div className="App">
      <Typography variant="h3" align="center">
        Список Конактов
      </Typography>
      {lists ? <List items={{ lists, setLists }} /> : "...Loading"}
    </div>
  );
}

export default App;
