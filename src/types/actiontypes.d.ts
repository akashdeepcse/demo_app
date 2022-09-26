import {PostDataProps} from './UserData';

export declare type UserReducerActionTypes =
  | {
      type: 'get_user_posts';
    }
  | {
      type: 'set_user_posts';
      payload?: PostDataProps[];
    }
  | {
      type: 'add_new_post';
      payload?: PostDataProps;
    };
