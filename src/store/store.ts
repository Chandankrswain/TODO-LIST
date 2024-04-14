import { createStore } from "redux";

import { rootReducer } from "./reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

//export const appStore = createStore(rootReducer);
export const appStore = createStore(persistedReducer);
export const persistor = persistStore(appStore);
