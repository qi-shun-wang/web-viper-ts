import { CGPoint, CGPointZero } from './CGPoint';
import { CGSize, CGSizeZero } from './CGSize';

export type CGRect = {
  point: CGPoint;
  size: CGSize;
};

export const CGRectZero: CGRect = {
  point: CGPointZero,
  size: CGSizeZero,
};
