import { UPDATE_COLLECTIONS } from '../actions/types';

const INITIAL_STATE = {
  collections: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};
