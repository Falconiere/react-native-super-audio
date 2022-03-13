#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SuperAudio, NSObject)
  RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(
    playSound: (NSString *)url
  ){
   return url;
 }
@end
