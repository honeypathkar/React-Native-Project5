import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import {playListData} from './src/constant';

export async function setUpPlayer() {
  let isSet = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSet = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSet = true;
  } finally {
    return isSet;
  }
}

export async function addTrack() {
  await TrackPlayer.add(playListData);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

export async function playBackServie() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
}
