// countryReducer.ts
import { SELECT_COUNTRY } from './countryActions';

const initialState = {
  selectedCountry: '',
};

const countryReducer = (state = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case SELECT_COUNTRY:
      return {
        ...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
