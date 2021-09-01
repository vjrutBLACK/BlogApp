import Container from '$components/Container';
import {RouteProp} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  Text,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {RootStackParam} from '../models/Navigator';
import FastImage from 'react-native-fast-image';
import Header from '$components/Header';
import {Blog} from '$models/Blog';
import Space from '$components/Space';
import moment from 'moment';
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';
import {LayoutChangeEvent} from 'react-native';

interface Props {
  route: RouteProp<RootStackParam, 'Blog'>;
}

const BlogPage = ({route}: Props) => {
  const blog = route.params.blog as unknown as Blog;
  let endAncestor;
  let endNode;
  const footer = () => {
    return <Space size={20} />;
  };

  const onScrollHandle = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    console.log('event', event.nativeEvent.contentOffset.y, event);
  };

  const onLayoutHandle = (event: LayoutChangeEvent) => {
    console.log('event text', event.nativeEvent.layout);
  };
  return (
    <Container
      paddingHorizontal
      scrollable
      onScroll={onScrollHandle}
      style={styles.container}
      footer={footer}>
      <View ref={ref => (endAncestor = nodeFromRef(ref))}>
        <SharedElement onNode={node => (endNode = node)}>
          <FastImage style={styles.image} source={{uri: blog.imageUrl}} />
        </SharedElement>
      </View>
      <Space size={10} />
      <Text style={styles.title}>{blog.title.toUpperCase()}</Text>
      <Space size={10} />
      <Text style={styles.view}>{`Viewer: ${blog.views}`}</Text>
      <Space size={10} />
      <Text style={styles.view}>{`Author: ${blog.author}`}</Text>
      <Space size={10} />
      <Text style={styles.view}>{`Date Published: ${moment(
        blog.datePublished,
      ).format('DD-MM-YYYY - HH:mm')}`}</Text>
      <Space size={10} />
      <Text onLayout={onLayoutHandle} style={styles.date}>
        {blog.content}
      </Text>
    </Container>
  );
};

export default BlogPage;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width - 40,
    height: ((width - 40) * 1080) / 1920,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  view: {
    fontSize: 16,
  },
  author: {},
  date: {},
});
