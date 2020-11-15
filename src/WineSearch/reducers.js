import {
    LOAD_LOT_CODES_SUCCESS,
    LOAD_LOT_CODES_FAILURE,
    SELECT_LOT_CODE, UNSELECT_LOT_CODE,
    LOAD_LOT_CODES_IN_PROGRESS
} from "./actions";

const initialState = {isLoading: false, data: []}

export const searchOpts = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOAD_LOT_CODES_IN_PROGRESS:
        case LOAD_LOT_CODES_FAILURE:
        case LOAD_LOT_CODES_SUCCESS:
    }
    return state
};

export const search = (state = '', action) => {
    const {type, payload} = action;
    switch (type) {
        case SELECT_LOT_CODE:
        case UNSELECT_LOT_CODE:
    }
    return state
};