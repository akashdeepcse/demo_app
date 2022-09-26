import {Layout, LayoutRoot, Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {Home, Modal, More} from '../screens';
import {colors} from '../theme';
import {presistedStore, store} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import React, {ComponentType} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const WrapperComponent =
  (Children: ComponentType<any>): ComponentType<any> =>
  props => {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={presistedStore}>
          <Children {...props} />
        </PersistGate>
      </Provider>
    );
  };

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('More', () => More);
Navigation.registerComponent('Modal', () => WrapperComponent(Modal));

export const RootNavigator: LayoutRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Home',
                },
              },
            ],
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                text: 'Home',
                textColor: colors.grey,
                selectedTextColor: colors.blue,
                icon: Icon.getImageSourceSync('home', 20, colors.grey),
                selectedIconColor: colors.blue,
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'More',
                },
              },
            ],
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                text: 'More',
                textColor: colors.grey,
                selectedTextColor: colors.blue,
                icon: Icon.getImageSourceSync('bars', 20, colors.grey),
                selectedIconColor: colors.blue,
              },
            },
          },
        },
      ],
      options: {
        topBar: {
          visible: false,
        },
        bottomTabs: {
          hideShadow: true,
        },
      },
    },
  },
};

export const ModalScreen: Layout = {
  stack: {
    children: [
      {
        component: {
          name: 'Modal',
          options: {
            topBar: {
              visible: false,
            },
          },
        },
      },
    ],
  },
};
