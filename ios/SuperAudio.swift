import Foundation
@objc(SuperAudio)
class SuperAudio: NSObject {
  
    @objc
    func playSound(_ url: String)-> String{
        print("url is \(url)")
        return url
    }
 
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
