//
//  GameCollectionViewCell.m
//  game4-mobile
//
//  Created by adin on 2024/4/8.
//

#import "GameCollectionViewCell.h"

@implementation GameCollectionViewCell

- (void)awakeFromNib {
    [super awakeFromNib];
    // Initialization code
}

- (void)dealloc {
    [_backimage release];
    [_imagelab release];
    [super dealloc];
}
@end
