import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../theme';
import {ModalTopBarProps} from '../../types';
import Icon from 'react-native-vector-icons/AntDesign';

export const ModalTopBar: React.FC<ModalTopBarProps> = props => {
  const {title, showBack, showNext, onPressBack, onPressNext} = props;
  return (
    <View style={styles.topBarContainer}>
      <TouchableOpacity
        activeOpacity={0.1}
        onPress={onPressBack}
        style={styles.buttonStyle}
        disabled={!showBack}>
        {showBack && <Icon name="left" size={16} color={colors.dark} />}
      </TouchableOpacity>
      <View style={styles.title}>
        {title && <Text style={styles.modalTitleText}>{title}</Text>}
      </View>
      <TouchableOpacity
        activeOpacity={0.1}
        style={styles.buttonStyle}
        onPress={onPressNext}
        disabled={!showNext}>
        {showNext && <Text style={styles.nextButtonTextStyle}>Add</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 15,
  },
  modalTitleText: {
    fontSize: fonts.fontSize.MD,
    fontWeight: fonts.fontWeight.MD,
    color: colors.dark,
  },
  title: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonTextStyle: {
    fontSize: fonts.fontSize.SM,
    fontWeight: fonts.fontWeight.MD,
    color: colors.blue,
  },
  buttonStyle: {
    width: '10%',
  },
});
