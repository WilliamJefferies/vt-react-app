import { createSelector } from 'reselect';

export const getLotCodes = state => state.search.data.lotCodes;
export const getSearchInput = state => state.search.input;
export const getLotCodesLoading = state => state.search.isLoading;

export const getSearchResults = createSelector(
    getLotCodes,
    getSearchInput,
    (lotCodes, input) => lotCodes.filter(code => code.toLowerCase().includes(input.toLowerCase()))
)