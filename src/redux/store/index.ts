import {configureStore} from '@reduxjs/toolkit';
import {userDataReducer} from '../reducers';
import {persistStore, persistReducer} from 'redux-persist';
import {userDataSaga} from '../saga';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'userData',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userDataReducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    userPosts: persistedReducer,
  },
  middleware: gDM => gDM({serializableCheck: false}).concat(sagaMiddleware),
});

export const presistedStore = persistStore(store);

sagaMiddleware.run(userDataSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
