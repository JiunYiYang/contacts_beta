import { ADD_CONTACT, DELETE_CONTACT } from '../constants';

export const addContact = (name, phone) => {
  const action = {
    type: ADD_CONTACT,
    name: name,
    phone: phone
  }
  console.log('addContact in action', action);
  return action;
}

export const deleteContact = (id) => {
  const action = {
    type: DELETE_CONTACT,
    id: id
  }
  console.log('deleteContact in action', action);
  return action;
}
