import { ComponentProps } from 'react';

import ServiceWithIdPage from '@/app/services/[serviceId]/page';
import { CommentPatchType } from '@/src/types/CommentPatchType';

export interface CreateCommentSectionProps
  extends Pick<CommentPatchType, 'serviceId' | 'uuid'> {}
