import { createSelector } from 'reselect';

export const loadLotCodes = state => state.search.data.lotCodes;
export const loadSearchInput = state => state.search.input;
export const isLoading = state => state.search.isLoading;

export const loadSearchResults = createSelector(
    loadLotCodes,
    loadSearchInput,
    (lotCodes, input) => lotCodes.filter(code => code.toLowerCase().includes(input.toLowerCase()))
)