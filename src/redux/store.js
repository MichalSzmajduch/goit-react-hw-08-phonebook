import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './sliceContact';
import { filterReducer } from './sliceFilter';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { authReducer } from './User/userSlice';

const persistConfig = {
  key: 'token',
  storage,
  whiteList: ['token'],
};

const persistReducerUser = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducerUser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistorProvider = persistStore(store);
