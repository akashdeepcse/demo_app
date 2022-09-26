import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../theme';
import {globalStyles} from '../../styles';

export const Loader: React.FC<{}> = () => {
  return (
    <View style={globalStyles.justifyAlignCenter}>
      <ActivityIndicator size={'large'} color={colors.blue} />
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    fontSize: fonts.fontSize.SM,
    fontWeight: fonts.fontWeight.SM,
  },
});
