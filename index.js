/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import {RootNavigator} from './src/navigator';

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(RootNavigator);
});
