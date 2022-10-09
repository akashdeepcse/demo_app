import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Loader} from '../core';
import {DataListProps, ListItemProps, PostDataProps} from '../../types';
import {Card} from './Card';
import {globalStyles} from '../../styles';

export const DataList: React.FC<DataListProps> = props => {
  const {data, isLoading, onReachedEnd, onRefresh, refreshing} = props;

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
  );
};

const styles = StyleSheet.create({
  listContainerStyle: {
    flexGrow: 1,
    paddingVertical: 15,
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
