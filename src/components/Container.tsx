import {BOTTOM_SPACE} from '$themes/constants';
import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollViewProps,
  StyleSheet,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Space from './Space';

const Container: React.FC<
  KeyboardAvoidingViewProps & {
    paddingHorizontal?: boolean;
    scrollable?: boolean;
    scrollViewProps?: ScrollViewProps;
    footer?: ReactNode;
    onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  }
> = ({
  style,
  paddingHorizontal,
  scrollable,
  children,
  scrollViewProps,
  footer,
  onScroll,
  ...props
}) => {
  const {style: scrollViewStyle, ..._scrollViewProps} = scrollViewProps || {};
  return (
    <KeyboardAvoidingView
      behavior="height"
      style={[
        styles.container,
        !scrollable && paddingHorizontal ? styles.paddingHorizontal : {},
        style,
      ]}
      enabled={true}
      {...props}>
      {scrollable ? (
        <ScrollView
          style={[
            paddingHorizontal ? styles.paddingHorizontal : {},
            scrollViewStyle,
          ]}
          {..._scrollViewProps}
          onScroll={onScroll}>
          {children}
        </ScrollView>
      ) : (
        children
      )}
      {footer}
      {footer ? <Space size={BOTTOM_SPACE} /> : null}
    </KeyboardAvoidingView>
  );
};

export default Container;

const styles = StyleSheet.create({
  paddingHorizontal: {paddingHorizontal: 16},
  container: {flex: 1, backgroundColor: '#fff'},
});
