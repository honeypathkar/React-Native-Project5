import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {setUpPlayer, addTrack} from '../musicPlayerServie';
import ControlCenter from './components/ControlCenter';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  async function setUp() {
    let isSetUp = await setUpPlayer();
    if (isSetUp) {
      await addTrack();
    }
    setIsReady(isSetUp);
  }

  useEffect(() => {
    setUp();
  }, []);

  if (!isReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

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
      <ControlCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    textAlign: 'center',
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    paddingTop: 30,
  },
  musicImage: {
    height: 300,
    width: 300,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
});
