import Foundation
import AVFoundation
import SwiftAudioPlayer


@objc(SuperAudio)
class SuperAudio: NSObject {
    

    var durationId: UInt?
    var duration: Double = 0.0
    
    
    @objc
    var _tracks:[String] = []
    
    @objc
    var _currentTrack:String = ""
    
    @objc
    var isPlaying: Bool = false
    
    
    @objc
    func setTracks(_ tracks:[String]){
        if(tracks.count > 0){
            self._tracks = tracks
            self._currentTrack = tracks[0]
        }
        
    }
    
    @objc
    func getTracks(
      _ resolve: RCTPromiseResolveBlock,
      rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
      resolve(self._tracks)
    }
    
    @objc
    func play(){
        if(self._currentTrack.isEmpty == false){
            print(self._currentTrack)
            let url = URL(string:self._currentTrack)!
            SAPlayer.shared.startRemoteAudio(withRemoteUrl: url)
            SAPlayer.shared.play()
        }
    }
    
    
    @objc
    func onDuration(_ callback:RCTResponseSenderBlock!){
        print("onDuration")
    
        durationId = SAPlayer.Updates.ElapsedTime.subscribe { [weak self] (position) in
            guard let self = self else { return }
            print(position)
            callback([position])
        }
        
    }
    
    @objc
    func unsubscribeFromDuration() {
        if(durationId != nil){
            guard let durationId = self.durationId else { return }
            SAPlayer.Updates.Duration.unsubscribe(durationId)
        }
        
    }
    
//    @objc
//    static func requiresMainQueueSetup() -> Bool {
//        return true
//    }
//
    
}
