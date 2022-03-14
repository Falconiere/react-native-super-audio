import Foundation
import AVFoundation



@objc(SuperAudioEventEmitter)
class SuperAudioEventEmitter {
  public static let shared = SuperAudioEventEmitter()
  override func supportedEvents() -> [String]! {
    return [
      "onDurationChange"
    ]
  }
}
