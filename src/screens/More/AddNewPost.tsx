import {View} from 'react-native';
import React, {useState} from 'react';
import {globalStyles} from '../../styles';
import {AddNewText} from '../../components';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../redux/store';
import {actions as userDataActions} from '../../redux/actions';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';

export const AddNewPost: NavigationFunctionComponent<{}> = props => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const onCloseAddingText = () => {
    Navigation.pop(props.componentId);
  };

  const onPressDone = () => {
    if (text.trim() !== '') {
      dispatch(
        userDataActions.addNewPostText({
          user_id: Math.random() * 10 ** 5,
          id: Math.random() * 10 ** 5,
          title: text,
          body: text,
          created_by: 'user',
        }),
      );
    }
    onCloseAddingText();
  };
  return (
    <View nativeID="addNewPost" style={globalStyles.fullScreenContainerWhite}>
      <AddNewText
        text={text}
        onTextChange={val => setText(val)}
        onPressDone={onPressDone}
        placeholder="Add your text here"
      />
    </View>
  );
};
