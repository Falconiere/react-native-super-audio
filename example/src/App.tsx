import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { play, setTracks, onDuration } from 'react-native-super-audio';

export const tracks = [
  'https://github.com/Falconiere/spotify-clone/blob/master/resouces/audio-02.mp3?raw=true',
  'https://github.com/Falconiere/spotify-clone/blob/master/resouces/audio-01.mp3?raw=true',
];

export default function App() {
  React.useEffect(() => {
    const initialize = async () => {
      await setTracks(tracks);
      onDuration((duration) => {
        console.log({ duration });
      });
    };
    initialize();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Play"
        onPress={() => {
          play();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
