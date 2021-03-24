import React from "react";
import Contact from "./Contact";
// import PropTypes from "prop-types";
import styles from "./ContactList.module.css";
import { connect } from "react-redux";
import { removeContact } from "../../redux/phonebook/contacts-operations";
import { getFilteredContacts } from "../../redux/phonebook/contacts-selectors";

const ContactList = ({ contacts, removeContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li className={styles.item} key={contact.id}>
          <Contact
            contact={contact}
            onRemoveContact={() => removeContact(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onRemoveContact: PropTypes.func.isRequired,
// };

const mapStateToProps = (state) => ({
  contacts: getFilteredContacts(state),
});

export default connect(mapStateToProps, { removeContact })(ContactList);
