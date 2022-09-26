import {PostDataProps} from '../../types';

export const types = {
  GET_USER_POSTS: 'get_user_posts',
  SET_USER_POSTS: 'set_user_posts',
  ADD_NEW_POST: 'add_new_post',
};

export const actions = {
  getUserPostData: () => ({type: types.GET_USER_POSTS}),
  addNewPostText: (data: PostDataProps) => ({
    type: types.ADD_NEW_POST,
    payload: data,
  }),
};
