import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactFailure = createAction("contacts/addContactFailure");

const removeContactRequest = createAction("contacts/removeContactRequest");
const removeContactSuccess = createAction("contacts/removeContactSuccess");
const removeContactFailure = createAction("contacts/removeContactFailure");

const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsFailure = createAction("contacts/fetchContactsFailure");

const filterContact = createAction("FILTER_CONTACT");

export {
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
};
