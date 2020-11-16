import {createStore, combineReducers, applyMiddleware} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import {productMeta, breakDown, breakDownOpts} from "./ProductView/reducers";
import {search, selected} from "./WineSearch/reducers";

import thunk from 'redux-thunk'
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = {
    productMeta,
    breakDown,
    breakDownOpts,
    search,
    selected
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)