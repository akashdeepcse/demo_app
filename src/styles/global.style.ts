import {StyleSheet} from 'react-native';
import {colors} from '../theme';

export const globalStyles = StyleSheet.create({
  fullScreenContainerWhite: {
    flex: 1,
    backgroundColor: colors.white,
  },
  shadow: {
    shadowRadius: 10,
    shadowColor: colors.shadow,
    shadowOpacity: 0.7,
    elevation: 20,
  },
  justifyAlignCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
