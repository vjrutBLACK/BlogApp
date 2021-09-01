import AppList from '$components/AppList';
import Empty from '$components/Empty';
import Item from '$components/Item';
import * as colors from '$themes/color';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Blog} from '../models/Blog';
import {useNavigation} from '@react-navigation/native';
import AppContext, {AppContextInterface} from '$components/AppContext';
import {Text} from 'moti';
import Header from '$components/Header';
import {SharedElement} from 'react-navigation-shared-element';
const blogs = require('$data/blog').blogs as Blog[];

const Home = () => {
  const {user, updateUser} = React.useContext<AppContextInterface>(AppContext);

  const ref = React.useRef(null);

  const navigation = useNavigation();

  const [refreshing, setOnRefresh] = React.useState(false);

  const checkLoading = () => {
    return null;
  };

  const renderListEmptyComponent = () => {
    if (checkLoading()) return null;
    return (
      <Empty text="Không có dữ liệu" textStyle={{color: colors.main_color}} />
    );
  };

  const onRefresh = () => {};

  const onEndReached = () => {};

  const onPressHandle = (item: Blog) => {
    if (user) {
      navigation.navigate('Blog', {blog: item});
    } else {
      navigation.goBack();
    }
  };

  const renderItem = (item: {item: Blog; index: number}) => {
    return <Item item={item.item} key={item.index} onPress={onPressHandle} />;
  };

  return (
    <View>
      <Header text={'Home Page'} />
      <AppList
        ref={ref}
        showsVerticalScrollIndicator={false}
        data={blogs}
        extraData={blogs}
        onEndReached={onEndReached}
        onEndReachedThreshold={10}
        scrollEventThrottle={400}
        keyExtractor={(item: any, index: number) => `${item.id}-${index}`}
        renderItem={renderItem}
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListEmptyComponent={renderListEmptyComponent}
        // ListFooterComponent={renderFooter}
        initialNumToRender={10}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {},
});
