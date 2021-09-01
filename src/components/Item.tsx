import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';
import {Blog} from '../models/Blog';
import Space from './Space';

interface Props {
  item: Blog;
  onPress: (item: Blog) => void;
}

const Item = ({item, onPress}: Props) => {
  let startAncestor;
  let startNode;
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View
        style={styles.container}
        ref={ref => (startAncestor = nodeFromRef(ref))}>
        <SharedElement onNode={node => (startNode = node)}>
          <FastImage
            style={styles.image}
            source={{uri: item.imageUrl}}
            resizeMode={FastImage.resizeMode.contain}
          />
        </SharedElement>
        <Space size={10} />
        <Text style={styles.title}>{item.title.toUpperCase()}</Text>
        <Space size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default Item;

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    width: width - 40,
    height: ((width - 40) * 1080) / 1920,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
