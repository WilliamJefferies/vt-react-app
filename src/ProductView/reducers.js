import {
    SET_META,
    LOAD_BREAK_DOWN_IN_PROGRESS,
    LOAD_BREAK_DOWN_SUCCESS,
    LOAD_BREAK_DOWN_FAILURE,
    LOAD_BREAK_DOWN_OPTS_IN_PROGRESS,
    LOAD_BREAK_DOWN_OPTS_FAILURE,
    LOAD_BREAK_DOWN_OPTS_SUCCESS
} from "./actions";


const breakDownInitialState = {
    isLoading: false,
    data: []
}
export const breakDown = (state = breakDownInitialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOAD_BREAK_DOWN_IN_PROGRESS:
        case LOAD_BREAK_DOWN_SUCCESS:
        case LOAD_BREAK_DOWN_FAILURE:
        case SET_META:
    }
    return state
}

// duplicate code to remove
const breakDownOptsInitialState = {
    isLoading: false,
    data: []
}
export const breakDownOpts = (state = breakDownInitialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case LOAD_BREAK_DOWN_OPTS_IN_PROGRESS:
        case LOAD_BREAK_DOWN_OPTS_SUCCESS:
        case LOAD_BREAK_DOWN_OPTS_FAILURE:
    }
    return state
}