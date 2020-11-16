export const LOAD_LOT_CODES_IN_PROGRESS = 'LOAD_LOT_CODES_IN_PROGRESS';
export const loadLotCodesInProgress = () => ({
    type: LOAD_LOT_CODES_IN_PROGRESS
});

export const LOAD_LOT_CODES_FAILURE = 'LOAD_LOT_CODES_FAILURE';
export const loadLotCodesFailure = () => ({
    type: LOAD_LOT_CODES_FAILURE
});

export const LOAD_LOT_CODES_SUCCESS = 'LOAD_LOT_CODES_SUCCESS';
export const loadLotCodesSuccess = (lotCodes) => ({
    payload: {lotCodes},
    type: LOAD_LOT_CODES_SUCCESS
});

export const SELECT_LOT_CODE = 'SELECT_LOT_CODE';
export const selectLotCode = (lotCode) => ({
    payload: {lotCode},
    type: SELECT_LOT_CODE
});

export const UNSELECT_LOT_CODE = 'UNSELECT_LOT_CODE';
export const unSelectLotCode = () => ({
    type: UNSELECT_LOT_CODE
});

export const SEARCH_TEXT_INPUT = 'SEARCH_TEXT_INPUT';
export const searchTextInput = (text) => ({
    type: SEARCH_TEXT_INPUT,
    payload: text
})

export const SEARCH_TEXT_CLEARED = 'SEARCH_TEXT_CLEARED';
export const searchTextCleared = () => ({
    type: SEARCH_TEXT_CLEARED,
})
