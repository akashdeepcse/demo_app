import {Reducer} from 'redux';
import {PostDataProps} from '../../types';
import {UserReducerActionTypes} from '../../types/actiontypes';

type UserDataState = {
  isLoading: boolean;
  postsData: PostDataProps[];
};

let initialState: UserDataState = {
  isLoading: false,
  postsData: [],
};

export const userDataReducer: Reducer<UserDataState, UserReducerActionTypes> = (
  state = initialState,
  action,
): UserDataState => {
  switch (action.type) {
    case 'get_user_posts':
      return {
        ...state,
        isLoading: true,
      };
    case 'set_user_posts':
      return {
        ...state,
        postsData: action.payload!,
        isLoading: false,
      };
    case 'add_new_post':
      return {
        ...state,
        postsData: [action.payload!, ...state.postsData!],
      };
    default:
      return state;
  }
};
