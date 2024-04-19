import storage from 'redux-persist/lib/storage';
import {createStore } from "redux";
import rootReducers from "./reducer";
import {persistReducer} from 'redux-persist'
import persistStore from 'redux-persist/es/persistStore';

const persistConfig={
    key: 'root',
    storage
}
const persistedReducer=persistReducer(persistConfig,rootReducers)

 export const store=createStore(persistedReducer);
// export default store;

export const persistor=persistStore(store)