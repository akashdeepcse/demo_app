import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {PostDataProps} from './UserData';

export declare interface ButtonComponent {
  title: string;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export declare interface CardComponent {
  text?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export declare interface ListItemProps<T> {
  item: T;
  index?: number;
}

export declare interface DataListProps {
  data: PostDataProps[];
  isLoading?: boolean;
  onReachedEnd?: () => void;
  onRefresh?: () => void;
  refreshing?: boolean;
}

export declare interface ModalTopBarProps {
  title?: string;
  showNext?: boolean;
  showBack?: boolean;
  onPressBack?: () => void;
  onPressNext?: () => void;
}

export declare interface AddTextComponentProps {
  text?: string;
  placeholder?: string;
  onTextChange?: (text: string) => void;
  onPressDone?: () => void;
}
