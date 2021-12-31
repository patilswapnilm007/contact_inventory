export const ADD_CONTACT = "ADD_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";

export const addContact = (contact) => {
  return { type: ADD_CONTACT, payload: contact };
};
export const deleteContact = (contact) => {
  return { type: DELETE_CONTACT, payload: contact };
};
export const updateContact = (contact) => {
  return { type: UPDATE_CONTACT, payload: contact };
};
