import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View>
      <Text style={styles.appTitle}>Music Player</Text>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://s.cafebazaar.ir/images/icons/com.shaiban.audioplayer.mplayer-13b17c69-d1c2-4a4e-94d0-e0b32bfa04ee_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize',
          }}
          style={styles.musicImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 30
  },
  musicImage: {
    height: 300,
    width: 300,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60
  },
});
