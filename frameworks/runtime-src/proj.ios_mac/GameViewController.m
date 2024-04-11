//
//  GameViewController.m
//  game4-mobile
//
//  Created by adin on 2024/4/8.
//

#import "GameViewController.h"
#import "GameCollectionViewCell.h"


@interface GameViewController ()<UICollectionViewDataSource, UICollectionViewDelegateFlowLayout>
@property (retain, nonatomic) IBOutlet UIView *backview;
@property (retain, nonatomic) IBOutlet UIButton *btn;
@property (nonatomic, strong) UICollectionView *collectionView;
@property (nonatomic,assign) int  indextop;
@property (nonatomic,assign) int  indextop2;
@end

@implementation GameViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    UICollectionViewFlowLayout *layout = [[UICollectionViewFlowLayout alloc] init];
        layout.scrollDirection = UICollectionViewScrollDirectionVertical;
    layout.minimumInteritemSpacing = 0; // 设置 cell 之间的水平间距
        layout.minimumLineSpacing = 0;
      //  self.collectionView = [[UICollectionView alloc] initWithFrame:self.view.bounds collectionViewLayout:layout];
    self.indextop=0;
    self.collectionView =[[UICollectionView alloc]initWithFrame:CGRectMake(55, 65, self.view.frame.size.width-140, self.view.frame.size.height-130) collectionViewLayout:layout];
        self.collectionView.backgroundColor = [UIColor whiteColor];
        self.collectionView.dataSource = self;
        self.collectionView.delegate = self;
    [self.collectionView setBackgroundColor:[UIColor clearColor]];

    UINib *nib = [UINib nibWithNibName:@"GameCollectionViewCell" bundle:nil];
       [self.collectionView registerNib:nib forCellWithReuseIdentifier:@"Ccell"];
    
        [self.backview addSubview:self.collectionView];
    
    [self.backview bringSubviewToFront:self.btn];

    }

    - (NSInteger)collectionView:(UICollectionView *)collectionView numberOfItemsInSection:(NSInteger)section {
        return 52; // 5 行，每行 12 个
    }

    - (UICollectionViewCell *)collectionView:(UICollectionView *)collectionView cellForItemAtIndexPath:(NSIndexPath *)indexPath {
        GameCollectionViewCell *cell = [collectionView dequeueReusableCellWithReuseIdentifier:@"Ccell" forIndexPath:indexPath];
        self.indextop++;
//        if (self.indextop<=4) {
//            cell.imagelab.text=@"A";
//            
//            
//            
//        }else if (self.indextop<=8){
//            
//        } if (self.indextop%4==1) {
            [cell.backimage setImage:[UIImage imageNamed:[NSString stringWithFormat:@"%i",self.indextop%4]]];
        
        if (self.indextop2/4==0) {
            cell.imagelab.text=@"A";
        }
        
        if (self.indextop2/4==1) {
            cell.imagelab.text=@"2";
        }
        
        if (self.indextop2/4==2) {
            cell.imagelab.text=@"3";
        }
        
        if (self.indextop2/4==3) {
            cell.imagelab.text=@"4";
        }
        
        if (self.indextop2/4==4) {
            cell.imagelab.text=@"5";
        }
        
        if (self.indextop2/4==5) {
            cell.imagelab.text=@"6";
        }
        
        if (self.indextop2/4==6) {
            cell.imagelab.text=@"7";
        }
        
        
        if (self.indextop2/4==7) {
            cell.imagelab.text=@"8";
        }
        
        if (self.indextop2/4==8) {
            cell.imagelab.text=@"9";
        }
        if (self.indextop2/4==9) {
            cell.imagelab.text=@"10";
        }
        if (self.indextop2/4==10) {
            cell.imagelab.text=@"J";
        }
        if (self.indextop2/4==11) {
            cell.imagelab.text=@"Q";
        }
        if (self.indextop2/4==12) {
            cell.imagelab.text=@"K";
        }
        
        if (self.indextop2/4==12) {
            cell.imagelab.text=@"K";
        }

        self.indextop2++;
        return cell;
    }

    - (CGSize)collectionView:(UICollectionView *)collectionView layout:(UICollectionViewLayout *)collectionViewLayout sizeForItemAtIndexPath:(NSIndexPath *)indexPath {
        CGFloat width = CGRectGetWidth(self.collectionView.frame) / 12; // Divide by 12 for 12 items per row
        CGFloat height = CGRectGetHeight(self.collectionView.frame) / 5; // Divide by 5 for 5 rows
        return CGSizeMake(width, height);
    }

- (IBAction)backclikc:(id)sender {
    
    [self dismissViewControllerAnimated:YES completion:nil];
}

/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

- (void)dealloc {
    [_backview release];
    [_btn release];
    [super dealloc];
}
@end
