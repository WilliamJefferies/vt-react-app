import {
    loadLotCodesInProgress,
    loadLotCodesFailure,
    loadLotCodesSuccess,
    selectLotCode,
    unSelectLotCode
} from "./actions";

export const displayAlert = text => () => {
    alert(text);
};

// todo api factory layer

let api = 'http://localhost:8080/api/lotcodes' //todo put in config

export const loadLotCodes = () => async dispatch => {
    try {
        dispatch(loadLotCodesInProgress());
        const response = await fetch(api, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const res = await response.json();
        dispatch(loadLotCodesSuccess(res))
    } catch (e) {
        dispatch(loadLotCodesFailure())
        dispatch(displayAlert(e))
    }
}
