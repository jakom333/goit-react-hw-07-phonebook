import axios from "axios";
import {
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

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());
  try {
    const response = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(fetchContactsFailure(error));
  }
};

const addContact = ({ name, number }) => async (dispatch) => {
  const contact = { name, number };
  dispatch(addContactRequest());
  try {
    const response = await axios.post("/contacts", contact);
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(addContactFailure(error));
  }
};

const removeContact = (id) => async (dispatch) => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(removeContactSuccess(id));
  } catch (error) {
    dispatch(removeContactFailure(error));
  }
};

export { addContact, removeContact, fetchContacts };
