//
//  ViewController.m
//  ObjectiveCSampleApp
//
//  Created by Kensuke Hoshikawa on 2016/09/17.
//  Copyright © 2016年 star__hoshi. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()
@property (weak, nonatomic) IBOutlet UITextField *heightTextField;
@property (weak, nonatomic) IBOutlet UITextField *weightTextField;
@property (weak, nonatomic) IBOutlet UIButton *calcButton;
@property (weak, nonatomic) IBOutlet UILabel *resultLabel;

@end

@implementation ViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view, typically from a nib.
}


- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}
- (IBAction)calcBMI:(id)sender {
  float height = [_heightTextField.text floatValue] / 100;
  float weight = [_weightTextField.text floatValue];
  float bmi = weight / (height*height);
  _resultLabel.text = [[NSString alloc] initWithFormat:@"%.2f", bmi];
}


@end
