import React from "react";

function Search2() {
  const [inputItems, setInputItems] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [singleUser, setSingleUser] = React.useState("");

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const {
    isOpen,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        users.filter((item) =>
          item.name.toLowerCase().startsWith(inputValue.toLowerCase())
        )
      );
    },
  });
  return (
    <div className="search">
      <h2>Current Users: {singleUser}</h2>
      <div {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          placeholder="Search"
          enterbutton="Search"
          size="large"
        />
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => {
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setSingleUser(item.name)}
            >
              <li
                style={highlightedIndex === index ? { background: "#ede" } : {}}
              >
                <h4>{item.name}</h4>
              </li>
            </span>;
          })}
      </ul>
    </div>
  );
}

export default Search2;
