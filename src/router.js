const SET_PAGE = 'SET_PAGE';
export const getPage = state => state.router
export const setPage = (page) => ({
    type: SET_PAGE,
    payload: page
})


export default (state = 'search', action) => {
    const {type, payload} = action;
    if (type === SET_PAGE) {
        return payload;
    } else return state;
};