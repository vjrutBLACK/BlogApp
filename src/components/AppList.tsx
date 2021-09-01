import * as colors from '$themes/color';
import React from 'react';
import {FlatList, FlatListProps, RefreshControl, StyleProp, ViewStyle} from 'react-native';

export interface IProps<T = any> extends FlatListProps<T> {
  refreshing: boolean;
  onRefresh: () => void;
  style?: StyleProp<ViewStyle>;
}

const LOADING_COLORS = [colors.main_color];
const AppList = React.forwardRef<IProps, any>(({style, refreshing, onRefresh, ...props}, ref) => {
  return (
    <FlatList
      ref={ref}
      initialNumToRender={10}
      {...props}
      refreshControl={
        <RefreshControl tintColor={colors.white} titleColor={colors.white} colors={LOADING_COLORS} refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
});

export default AppList;
