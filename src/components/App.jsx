import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactsList/ContactList";
import Filter from "./filter/Filter";
import Loader from "react-loader-spinner";
import styles from "./App.module.css";
import { connect } from "react-redux";
import {
  addContact,
  fetchContacts,
  removeContact,
} from "../redux/phonebook/contacts-operations";
import { getContacts, getLoader } from "../redux/phonebook/contacts-selectors";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  createContact = ({ name, number }) => {
    const sameName = this.props.contacts.some(
      (contact) => contact.name === name || contact.number === number
    );
    if (sameName) {
      alert(`This contact is already exists`);
    } else if (name.length === 0 || number.length === 0) {
      alert(`Fill in all the fields`);
    } else {
      this.props.addContact({ name, number });
    }
  };

  render() {
    console.log(this.props.contacts);
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.createContact} />
        <h2>Contacts</h2>
        {this.props.contacts.length >= 2 && <Filter />}
        <ContactList
          contacts={this.props.contacts}
          removeContact={this.props.removeContact}
        />
        {this.props.loader && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  loader: getLoader(state),
});
const mapDispatchToProps = { addContact, removeContact, fetchContacts };

export default connect(mapStateToProps, mapDispatchToProps)(App);
