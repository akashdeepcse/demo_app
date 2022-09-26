import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../theme';
import {CardComponent} from '../../types';
import {globalStyles} from '../../styles';

export const Card: React.FC<CardComponent> = props => {
  const {text, style, textStyle} = props;
  return (
    <View style={[styles.cardStyle, globalStyles.shadow, style]}>
      {text ? (
        <Text style={[styles.cardTextStyle, textStyle]}>{text}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: '100%',
    paddingHorizontal: '7%',
    paddingVertical: '10%',
    backgroundColor: colors.white,
    borderRadius: 15,
  },
  cardTextStyle: {
    fontSize: fonts.fontSize.MD,
    fontWeight: fonts.fontWeight.MD,
    color: colors.dark,
    textAlign: 'center',
  },
});
