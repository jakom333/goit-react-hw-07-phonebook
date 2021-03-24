import { combineReducers } from "redux";
import { contacts, filter, loader } from "./contacts.reducers";

const rootReducer = combineReducers({
  contacts,
  filter,
  loader,
});

export default rootReducer;
