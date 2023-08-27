//
//  GoApptivDocumentScanner.m
//  ChannelPaisa
//
//  Created by Krishna Teja Akkapeddi on 25/05/23.
//

#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Goapptivimagemodule, NSObject)
 
RCT_EXTERN_METHOD(camera:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(gallery:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)

@end


