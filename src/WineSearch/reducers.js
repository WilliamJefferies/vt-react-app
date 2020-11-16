import {
    LOAD_LOT_CODES_SUCCESS,
    LOAD_LOT_CODES_FAILURE,
    SELECT_LOT_CODE, UNSELECT_LOT_CODE,
    LOAD_LOT_CODES_IN_PROGRESS,
    SEARCH_TEXT_CLEARED,
    SEARCH_TEXT_INPUT
} from "./actions";

const initialState = {isLoading: false, data: [], input: ''}

export const search = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOAD_LOT_CODES_IN_PROGRESS:
            return {
                ...state,
                isLoading: true,
            }
        case LOAD_LOT_CODES_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case LOAD_LOT_CODES_SUCCESS:
            const {lotCodes} = payload
            return {
                ...state,
                isLoading: false,
                data: lotCodes

            }
        case SEARCH_TEXT_INPUT:
            return {
                ...state,
                input: payload
            }
        case SEARCH_TEXT_CLEARED:
            return {
                ...state,
                input: ''
            }
        default:
            return state

    }
};

export const selected = (state = '', action) => {
    const {type, payload} = action;
    switch (type) {
        case SELECT_LOT_CODE:
        case UNSELECT_LOT_CODE:
    }
    return state
};