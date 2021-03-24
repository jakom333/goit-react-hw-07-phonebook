import { createReducer } from "@reduxjs/toolkit";
import {
  filterContact,
  addContactRequest,
  addContactSuccess,
  addContactFailure,
  removeContactRequest,
  removeContactSuccess,
  removeContactFailure,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsFailure,
} from "./contacts.actions";

const contacts = createReducer([], {
  [fetchContactsSuccess]: (_, action) => action.payload,
  [addContactSuccess]: (state, action) => [...state, action.payload],
  [removeContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer("", {
  [filterContact]: (_, action) => action.payload,
});

const loader = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsFailure]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactFailure]: () => false,

  [removeContactRequest]: () => true,
  [removeContactSuccess]: () => false,
  [removeContactFailure]: () => false,
});

export { contacts, filter, loader };
