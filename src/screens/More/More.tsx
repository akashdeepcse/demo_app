import {StyleSheet, View} from 'react-native';
import React from 'react';
import {colors} from '../../theme';
import {Button} from '../../components';
import {Navigation} from 'react-native-navigation';
import {ModalScreen} from '../../navigator';

export const More = () => {
  return (
    <View style={styles.fullScreenContainer}>
      <View style={styles.innerContainer}>
        <Button
          title="Open Modal"
          onClick={() => Navigation.showModal(ModalScreen)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullScreenContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: '50%',
  },
  innerContainer: {
    width: '70%',
    alignSelf: 'center',
  },
});
