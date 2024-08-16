import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MusicPlayer from './screens/MusicPlayer';
import {setUpPlayer, addTrack} from '../musicPlayerServie';

function App(): JSX.Element {
  const [isPlayerReady, setIsPaylerReady] = useState(false);

  async function setup() {
    let isSetup = await setUpPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPaylerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.appTitle}>Music Player</Text>
      <MusicPlayer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appTitle: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: '#001d23',
    paddingTop: 20
  },
});

export default App;
