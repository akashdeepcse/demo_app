import {Platform} from 'react-native';

export const colors = {
  dark: '#000000',
  blue: '#3300FF',
  white: '#ffffff',
  grey: '#A8A8A8',
  shadow: Platform.OS === 'ios' ? '#0003' : '#0009',
};
