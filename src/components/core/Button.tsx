import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {ButtonComponent} from '../../types';
import {colors, fonts} from '../../theme';

export const Button: React.FC<ButtonComponent> = props => {
  const {title, onClick, style, textStyle, disabled} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onClick}
      disabled={disabled}
      style={[styles.buttonLayout, style, disabled && styles.buttonDisabled]}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: colors.blue,
  },
  textStyle: {
    fontSize: fonts.fontSize.LG,
    fontWeight: fonts.fontWeight.MD,
    color: colors.white,
  },
  buttonDisabled: {
    backgroundColor: colors.grey,
  },
});
