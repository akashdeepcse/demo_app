import {View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {DataList} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/store';
import {actions as userDataActions} from '../../redux/actions';
import {globalStyles} from '../../styles';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import {colors, fonts} from '../../theme';
import Icon from 'react-native-vector-icons/AntDesign';

export const PostsList: NavigationFunctionComponent<{}> = props => {
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const {postsData, isLoading} = useSelector(
    (state: RootState) => state.userPosts,
  );
  const dispatch = useDispatch<AppDispatch>();

  const fetchUserPostData = useCallback(() => {
    dispatch(userDataActions.getUserPostData());
  }, [dispatch]);

  useEffect(() => {
    if (postsData.length === 0) {
      fetchUserPostData();
    }
  }, [postsData.length, fetchUserPostData]);

  useEffect(() => {
    const navSubscribe =
      Navigation.events().registerNavigationButtonPressedListener(e => {
        if (e.buttonId === 'addButton') {
          Navigation.push(props.componentId, {
            component: {
              name: 'NewPost',
              options: {
                topBar: {
                  noBorder: true,
                  elevation: 0,
                  scrollEdgeAppearance: {active: true, noBorder: true},
                  title: {
                    text: 'Adding data',
                    fontSize: fonts.fontSize.MD,
                    alignment: 'center',
                  },
                  backButton: {
                    icon: Icon.getImageSourceSync('left', 16, colors.dark),
                    color: colors.dark,
                    title: '',
                  },
                },
              },
            },
          });
        }
      });
    return () => navSubscribe.remove();
  }, [props.componentId]);

  const onRefreshList = () => {
    setIsRefreshing(true);
    fetchUserPostData();
    setIsRefreshing(false);
  };

  return (
    <View style={globalStyles.fullScreenContainerWhite}>
      <DataList
        data={postsData}
        isLoading={isLoading}
        refreshing={isRefreshing}
        onRefresh={onRefreshList}
      />
    </View>
  );
};
