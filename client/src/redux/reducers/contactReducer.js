import { GET_CONTACT } from "../action-types/contact-action-types";

const initialState = {
  contact: [],
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload.contacts,
      };

    default:
      return state;
  }
};
