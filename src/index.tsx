import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-super-audio' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const SuperAudio = NativeModules.SuperAudio
  ? NativeModules.SuperAudio
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function setTracks(tracks: string[]): void {
  SuperAudio.setTracks(tracks);
}

export function getTracks(): Promise<string[]> {
  return SuperAudio.getTracks();
}

export function play(): void {
  SuperAudio.play();
}

export function pause(): void {
  SuperAudio.pause();
}

export function position(): number {
  return SuperAudio.position();
}

export function onDuration(callback: (duration: number) => void): void {
  SuperAudio.onDuration((duration: number) => {
    callback(duration);
  });
}
