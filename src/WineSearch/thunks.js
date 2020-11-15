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

let api = '' //todo put in config

export const loadLotCodes = () => async dispatch => {
    try {
        dispatch(loadLotCodesInProgress());
        const response = await fetch(api.lotcodes);
        const lotcodes = await response.json()

        //manipulate resp to redux

        dispatch(loadLotCodesSuccess(lotcodes))

    } catch (e) {
        dispatch(loadLotCodesFailure())
        dispatch(displayAlert(e))
    }
}