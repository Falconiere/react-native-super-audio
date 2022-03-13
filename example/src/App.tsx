import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { playSound } from 'react-native-super-audio';

export default function App() {
  const [audio, setAudio] = React.useState<string>('');
  console.log({ audio });

  return (
    <View style={styles.container}>
      <Text>Audio: {audio}</Text>
      <Button
        title="playSound"
        onPress={() => {
          const s = playSound('Hello World');
          setAudio(s);
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
