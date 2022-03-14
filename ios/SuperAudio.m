#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>


@interface RCT_EXTERN_MODULE(SuperAudio, NSObject)

  RCT_EXTERN_METHOD(setTracks:(NSArray *)tracks)
  RCT_EXTERN_METHOD(
    getTracks: (RCTPromiseResolveBlock) resolve
    rejecter: (RCTPromiseRejectBlock) reject
  )

  RCT_EXTERN_METHOD(play)
  RCT_EXTERN_METHOD(
    onDuration: (RCTResponseSenderBlock) callback
  )

@end
