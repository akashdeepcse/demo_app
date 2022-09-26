declare type FontWeight =
  | any
  | '400'
  | '600'
  | '900'
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '500'
  | '700'
  | '800'
  | undefined;

export declare type Fonts = {
  fontSize: {[key: string]: number};
  fontWeight: {
    [x: string]: FontWeight;
  };
};
