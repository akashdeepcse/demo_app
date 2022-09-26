import {takeEvery} from '@redux-saga/core/effects';
import {StrictEffect} from '@redux-saga/types';
import {types} from '../actions';
import * as UserDataSaga from './userdata.saga';

export function* userDataSaga(): Generator<StrictEffect> {
  yield takeEvery(types.GET_USER_POSTS, UserDataSaga.getUserPostData);
}
