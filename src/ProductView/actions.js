export const SET_META = 'SET_META';
export const setMeta = (meta) => ({
    type: SET_META,
    payload: meta
});

export const BREAK_DOWN_REQ = 'BREAK_DOWN_REQ';
export const loadBreakDownInProgress = () => ({
    type: BREAK_DOWN_REQ,
});
export const BREAK_DOWN_SUCCESS = 'BREAK_DOWN_SUCCESS';
export const loadBreakDownSuccess = (data) => ({
    type: BREAK_DOWN_SUCCESS,
    payload: data
});
export const BREAK_DOWN_FAILURE = 'BREAK_DOWN_FAILURE';
export const loadBreakDownFailure = () => ({
    type: BREAK_DOWN_FAILURE
});

export const BREAK_DOWN_OPTS_REQ = 'BREAK_DOWN_OPTS_REQ';
export const breakDownOptsReq = () => ({
    type: BREAK_DOWN_OPTS_REQ
});

export const BREAK_DOWN_OPTS_SUCCESS = 'BREAK_DOWN_OPTS_SUCCESS';
export const breakDownOptsSuccess = (opts) => ({
    type: BREAK_DOWN_OPTS_SUCCESS,
    payload: opts
});

export const BREAK_DOWN_OPTS_FAILURE = 'BREAK_DOWN_OPTS_FAILURE';
export const breakDownOptsFailure = () => ({
    type: BREAK_DOWN_OPTS_FAILURE,
});