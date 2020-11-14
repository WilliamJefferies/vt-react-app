import {
    META_DATA_REQ,
    META_DATA_FAILURE,
    META_DATA_SUCCESS,
    BREAK_DOWN_REQ,
    BREAK_DOWN_SUCCESS,
    BREAK_DOWN_FAILURE,
    BREAK_DOWN_OPTS_REQ,
    BREAK_DOWN_OPTS_FAILURE,
    BREAK_DOWN_OPTS_SUCCESS
} from "./actions";

const productMetaInitialState = {
    isLoading: false,
    data: {}
}
export const productMeta = (state = productMetaInitialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case META_DATA_REQ:
        case META_DATA_FAILURE:
        case META_DATA_SUCCESS:
    }
    return state
}

const breakDownInitialState = {
    isLoading: false,
    data: []
}
export const breakDown = (state = breakDownInitialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case BREAK_DOWN_REQ:
        case BREAK_DOWN_SUCCESS:
        case BREAK_DOWN_FAILURE:
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
        case BREAK_DOWN_OPTS_REQ:
        case BREAK_DOWN_OPTS_SUCCESS:
        case BREAK_DOWN_OPTS_FAILURE:
    }
    return state
}