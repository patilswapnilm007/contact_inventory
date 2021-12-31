import contacts from "../Contacts.json";
import { ADD_CONTACT, DELETE_CONTACT, UPDATE_CONTACT } from "./actions";

const initialState = {
  contactsList: contacts,
  contactCount: contacts.length,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        contactsList: [
          ...state.contactsList,
          { id: state.contactCount + 1, ...action.payload },
        ],
        contactCount: state.contactCount + 1,
      };
    case UPDATE_CONTACT:
      const editIndex = state.contactsList.findIndex((value) => {
        return value.id === action.payload.id;
      });
      state.contactsList.splice(editIndex, 1, action.payload);
      return {
        ...state,
        contactsList: [...state.contactsList],
      };
    case DELETE_CONTACT:
      const deleteIndex = state.contactsList.findIndex((value) => {
        return value.id === action.payload;
      });
      state.contactsList.splice(deleteIndex, 1);
      return {
        ...state,
        contactsList: [...state.contactsList],
      };
    default:
      return state;
  }
}
