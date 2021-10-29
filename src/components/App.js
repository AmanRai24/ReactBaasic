import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import api from "../api/contacts";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTearm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // const retrieveContacts = async () => {
  //   const response = await api.get("./contacts");
  //   return response.data;
  // };

  useEffect(() => {
    const retrieveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };

    setContacts([...contacts, request]);

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...contacts, request])
    );
  };

  const updateContactHandler = async (contact) => {
    //const response = await api.put(`/contacts/${contact.id}`, contact);
    //const { id, name, email, mobile } = response.data;
    const newContactList = contacts.map((res) => {
      return res.id === contact.id ? { ...contact } : contact;
    });

    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  const removeContactHandler = async (id) => {
    //await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

  const searchHandler = (searchTerm) => {
    setSearchTearm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
          />

          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />

          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
