import {Pressable, Text} from 'native-base';
import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Animated} from 'react-native';

const Chat = () => {
  const [shareBox] = useState(new Animated.Value(40));
  const [pop, setPop] = useState(false);

  const popIn = () => {
    setPop(true);
    Animated.timing(shareBox, {
      toValue: 80,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const popOut = () => {
    setPop(false);
    Animated.timing(shareBox, {
      toValue: 20,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View
      style={{
        flex: 1,
      }}>
      <Animated.View style={[styles.circle, {bottom: shareBox}]}>
        <TouchableOpacity>
          <Text>Hii</Text>
        </TouchableOpacity>
      </Animated.View>
      <Pressable
        ml={'2'}
        mr={'2'}
        w={'full'}
        py={'4'}
        bg={'red.500'}
        position={'absolute'}
        bottom={'4'}
        rounded={'xl'}
        alignSelf={'center'}
        justifyContent={'center'}
        alignItems={'center'}
        onPress={() => {
          pop === false ? popIn() : popOut();
        }}>
        <Text>Plus</Text>
      </Pressable>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  circle: {
    backgroundColor: '#f52d56',
    width: '100%',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 0,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
