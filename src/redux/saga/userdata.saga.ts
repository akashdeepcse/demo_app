import {call, put} from 'redux-saga/effects';
import {API_URLS} from '../../constants';
import {httpService} from '../../services/httpservice';
import {PostDataProps} from '../../types';
import {types} from '../actions';

export function* getUserPostData() {
  try {
    const response: PostDataProps[] = yield call(httpService, {
      path: API_URLS.USER_POSTS,
      request: {method: 'GET'},
    });
    yield put({type: types.SET_USER_POSTS, payload: response});
  } catch (error) {
    console.log(error);
  }
}
