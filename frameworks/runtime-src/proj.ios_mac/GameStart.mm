#include "GameStart.h"
#import <Foundation/Foundation.h>
#import "AppController.h"
#import <AudioToolbox/AudioToolbox.h>
#import "CommonCrypto/CommonDigest.h"
#import "GameViewController.h"
#import "GuizeViewController.h"
@implementation GameStart

+ (void)introdution {
    AppController *deleget = UIApplication.sharedApplication.delegate;
    //    UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"game" bundle:nil];
    GuizeViewController *One = [[GuizeViewController alloc]init];
        [deleget.viewController  presentViewController:One animated:YES completion:nil];
}

+ (void)cards {
    AppController *deleget = UIApplication.sharedApplication.delegate;
    //    UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"game" bundle:nil];
    GameViewController *One = [[GameViewController alloc]init];
        [deleget.viewController  presentViewController:One animated:YES completion:nil];
    
}

+ (void)end {
    
}

+ (void)clear {
  
}


@end
