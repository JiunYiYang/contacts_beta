import { ADD_CONTACT, DELETE_CONTACT } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const contact = (action) => {
  let { name, phone } = action;
  return {
    name: name,
    phone: phone,
    id: Math.random()
  }
}

const removeById = (state = [], id) => {
  const contacts = state.filter(contact => contact.id !== id);
  return contacts;
}

const contacts = (state = [], action) => {
  let contacts = null;
  state = read_cookie('contacts');
  switch (action.type) {
    case ADD_CONTACT:
      contacts = [...state, contact(action)];
      bake_cookie('contacts', contacts);
      return contacts;
    case DELETE_CONTACT:
      contacts = removeById(state, action.id);
      bake_cookie('contacts', contacts);
      return contacts;
    default:
      return state;
  }
}

export default contacts;
