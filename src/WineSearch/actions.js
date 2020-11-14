export const GET_LOT_CODES_REQUEST = 'GET_LOT_CODES_REQUEST';
export const getLotCodesRequest = () => ({
    type: GET_LOT_CODES_REQUEST
})

export const GET_LOT_CODES_FAILURE = 'GET_LOT_CODES_FAILURE';
export const getLotCodesFailure = () => ({
    type: GET_LOT_CODES_FAILURE
})

export const GET_LOT_CODES_SUCCESS = 'GET_LOT_CODES_FAILURE';
export const getLotCodesSuccess = (lotCodes) => ({
    payload: lotCodes,
    type: GET_LOT_CODES_SUCCESS
})

export const SELECT_LOT_CODE = 'SELECT_LOT_CODE';
export const setLotCode = (lotCode) => ({
    payload: lotCode,
    type: SELECT_LOT_CODE
})
