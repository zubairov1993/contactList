import React from "react";
import axios from "axios";
import List from "./components/List";
import Typography from "@material-ui/core/Typography";

function App() {
  const [lists, setLists] = React.useState("");
  // Получение из JSONplaceholder
  React.useEffect(() => {
    axios.get("http://jsonplaceholder.typicode.com/users").then(({ data }) => {
      setLists(data);
    });
  }, []);

  // Получение из JSONplaceholder

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
