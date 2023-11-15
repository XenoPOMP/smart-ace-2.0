import { CommentPatchType } from '@/src/types/CommentPatchType';

export interface CreateCommentSectionProps
  extends Pick<CommentPatchType, 'serviceId' | 'uuid'> {
  commentRefetchCallback?: () => Promise<void>;
}
