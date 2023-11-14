import { IComment } from '@/src/interfaces/Comment.interface';

export interface CommentBlockProps {
  comment: IComment;
  sessionId?: string;
  variant?: 'default' | 'loader';
  delay?: number;
}
