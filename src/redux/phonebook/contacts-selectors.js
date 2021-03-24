import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts;

const getLoader = (state) => state.loader;

const getFilter = (state) => state.filter;

const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export { getContacts, getLoader, getFilter, getFilteredContacts };
