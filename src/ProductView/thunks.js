import {
    setMeta,
    loadBreakDownInProgress,
    loadBreakDownSuccess,
    loadBreakDownFailure
} from "./actions";


export const displayAlert = text => () => {
    alert(text);
}; //todo merge to one file


export const loadLotCodes = (breakdownStrategy, lotCode) => async dispatch => {
    let api = `http://localhost:8080/api/${breakdownStrategy}/${lotCode}` //todo put in config
    try {
        dispatch((loadBreakDownInProgress()));
        const response = await fetch(api, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const res = await response.json();
        dispatch(setMeta(res.meta)) //todo merge two reducers, unnescairy logic here
        dispatch(loadBreakDownSuccess(res.breakdown))
    } catch (e) {
        dispatch(loadBreakDownFailure())
        dispatch(displayAlert(e))
    }
}