import { IComment } from '@/src/interfaces/Comment.interface';

export interface RatingProps extends Pick<IComment, 'rating'> {
  hideStars?: boolean;
  hideNumbers?: boolean;
  interactive?: boolean;
  changeRating?: (newRating: number) => void;
}
