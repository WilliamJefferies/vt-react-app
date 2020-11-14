export const META_DATA_REQ = 'META_DATA_REQ';
export const metaDataReq = () => ({
    type: META_DATA_REQ
});

export const META_DATA_SUCCESS = 'META_DATA_SUCCESS';
export const metaDataSuccess = (meta) => ({
    type: META_DATA_SUCCESS,
    payload: meta
});
export const META_DATA_FAILURE = 'META_DATA_FAILURE';
export const metaDataFailure = () => ({
    type: META_DATA_FAILURE,
});
export const BREAK_DOWN_REQ = 'BREAK_DOWN_REQ';
export const breakDownReq = () => ({
    type: BREAK_DOWN_REQ,
});
export const BREAK_DOWN_SUCCESS = 'BREAK_DOWN_SUCCESS';
export const breakDownSuccess = (data) => ({
    type: BREAK_DOWN_SUCCESS,
    payload: data
});
export const BREAK_DOWN_FAILURE = 'BREAK_DOWN_FAILURE';
export const breakDownFailure = () => ({
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