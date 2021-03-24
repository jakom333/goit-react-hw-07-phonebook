import React from "react";
// import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { connect } from "react-redux";
import { filterContact } from "../../redux/phonebook/contacts.actions";
import { getFilter } from "../../redux/phonebook/contacts-selectors";

const Filter = ({ value, filterContact }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={value}
        onChange={(event) => filterContact(event.target.value)}
      />
    </label>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChangeFilter: PropTypes.func.isRequired,
// };
const mapStateToProps = (state) => ({
  value: getFilter(state),
});

export default connect(mapStateToProps, { filterContact })(Filter);
