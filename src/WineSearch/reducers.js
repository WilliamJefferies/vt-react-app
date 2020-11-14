import {
    GET_LOT_CODES_REQUEST,
    GET_LOT_CODES_SUCCESS,
    GET_LOT_CODES_FAILURE,
    SELECT_LOT_CODE
} from "./actions";

const initialState = {isLoading: false, data: []}

export const searchOptions = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_LOT_CODES_REQUEST:
        case GET_LOT_CODES_FAILURE:
        case GET_LOT_CODES_SUCCESS:
    }
    return state
}

export const search = (state = '', action) => {
    const { type, payload } = action;
    switch (type) {
        case SELECT_LOT_CODE:
    }
    return state
}