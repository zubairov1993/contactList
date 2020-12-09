import React from "react";
import Contact from "./Contact";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: "",
      contacts: [
        {
          id: "1",
          name: "qqqhnhqq",
          phone: "11111",
        },
        {
          id: "2",
          name: "wwafawdaww",
          phone: "2222",
        },
        {
          id: "3",
          name: "eeeeefvtbr",
          phone: "3333",
        },
        {
          id: "4",
          name: "rrrwqwqcese",
          phone: "44444",
        },
      ],
    };
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    let filteredContacts = this.state.contacts.filter((contact) => {
      return (
        contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });
    return (
      <div className="search">
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
        <ul>
          {filteredContacts.map((contact) => {
            return <Contact contact={contact} key={contact.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default Search;
