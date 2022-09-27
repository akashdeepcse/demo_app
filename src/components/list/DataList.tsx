import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Keyboard,
} from 'react-native';
import React from 'react';
import {Loader} from '../core';
import {DataListProps, ListItemProps, PostDataProps} from '../../types';
import {Card} from './Card';
import {globalStyles} from '../../styles';
import {AddNewText} from './AddNewText';

const {width, height} = Dimensions.get('screen');

export const DataList: React.FC<DataListProps> = props => {
  const {
    data,
    isLoading,
    onReachedEnd,
    onRefresh,
    refreshing,
    addNexText,
    text,
    onPressDone,
    onTextChange,
  } = props;
  const animation = React.useRef(new Animated.Value(0)).current;

  const animateView = React.useCallback(
    (index: number) => {
      Animated.spring(animation, {
        toValue: -index * width,
        velocity: 10,
        useNativeDriver: true,
      }).start();
    },
    [animation],
  );

  React.useEffect(() => {
    if (addNexText) {
      animateView(1);
    } else {
      Keyboard.dismiss();
      animateView(0);
    }
  }, [addNexText, animateView]);

  const renderListItem = ({item}: ListItemProps<PostDataProps>) => {
    return (
      <View style={styles.itemStyle}>
        <Card text={item?.title} style={styles.cardStyle} />
      </View>
    );
  };

  const renderEmptyList = () => {
    return (
      <View
        style={[
          globalStyles.fullScreenContainerWhite,
          globalStyles.justifyAlignCenter,
        ]}>
        {isLoading ? (
          <Loader />
        ) : data.length === 0 ? (
          <Text>No Data Found...</Text>
        ) : null}
      </View>
    );
  };

  return (
    <Animated.View
      style={[
        globalStyles.fullScreenContainerWhite,
        styles.animatedContainer,
        {transform: [{translateX: animation}]},
      ]}>
      <View style={styles.innerContainer}>
        <FlatList
          data={data}
          renderItem={renderListItem}
          keyExtractor={(_, i) => `${i}`}
          ListEmptyComponent={renderEmptyList}
          onEndReachedThreshold={0.5}
          style={[globalStyles.fullScreenContainerWhite]}
          contentContainerStyle={styles.listContainerStyle}
          onEndReached={onReachedEnd}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      </View>
      <View style={styles.innerContainer}>
        <AddNewText
          placeholder="Add your text here"
          text={text}
          onTextChange={onTextChange}
          onPressDone={onPressDone}
          containerStyle={styles.innerContainer}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 50,
    left: 0,
    width: width * 2,
    height: height - 110,
  },
  innerContainer: {
    width: width,
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
  listContainerStyle: {
    flexGrow: 1,
    paddingVertical: 15,
    width: width,
  },
  cardStyle: {
    width: '90%',
    alignSelf: 'center',
  },
  itemStyle: {
    marginBottom: 20,
    width: '100%',
  },
});
