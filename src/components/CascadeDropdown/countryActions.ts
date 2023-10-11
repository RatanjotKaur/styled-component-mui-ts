// countryActions.ts
export const SELECT_COUNTRY = 'SELECT_COUNTRY';

export const selectCountry = (country: any) => {
  return {
    type: SELECT_COUNTRY,
    payload: country,
  };
};
