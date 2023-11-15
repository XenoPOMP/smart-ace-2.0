import { IComment } from '@/src/interfaces/Comment.interface';

export interface RatingProps extends Pick<IComment, 'rating'> {
  hideStars?: boolean;
  hideNumbers?: boolean;
  interactive?: boolean;
  changeRating?: (newRating: 1 | 2 | 3 | 4 | 5) => void;
}
