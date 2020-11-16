export const SET_META = 'SET_META';
export const setMeta = (meta) => ({
    type: SET_META,
    payload: meta
});

export const LOAD_BREAK_DOWN_IN_PROGRESS = 'LOAD_BREAK_DOWN_IN_PROGRESS';
export const loadBreakDownInProgress = () => ({
    type: LOAD_BREAK_DOWN_IN_PROGRESS,
});
export const LOAD_BREAK_DOWN_SUCCESS = 'LOAD_BREAK_DOWN_SUCCESS';
export const loadBreakDownSuccess = (data) => ({
    type: LOAD_BREAK_DOWN_SUCCESS,
    payload: data
});
export const LOAD_BREAK_DOWN_FAILURE = 'LOAD_BREAK_DOWN_FAILURE';
export const loadBreakDownFailure = () => ({
    type: LOAD_BREAK_DOWN_FAILURE
});

export const LOAD_BREAK_DOWN_OPTS_IN_PROGRESS = 'LOAD_BREAK_DOWN_OPTS_IN_PROGRESS';
export const loadBreakDownOptsReq = () => ({
    type: LOAD_BREAK_DOWN_OPTS_IN_PROGRESS
});

export const LOAD_BREAK_DOWN_OPTS_SUCCESS = 'LOAD_BREAK_DOWN_OPTS_SUCCESS';
export const loadBreakDownOptsSuccess = (opts) => ({
    type: LOAD_BREAK_DOWN_OPTS_SUCCESS,
    payload: opts
});

export const LOAD_BREAK_DOWN_OPTS_FAILURE = 'LOAD_BREAK_DOWN_OPTS_FAILURE';
export const loadBreakDownOptsFailure = () => ({
    type: LOAD_BREAK_DOWN_OPTS_FAILURE,
});