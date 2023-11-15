import { SelectivePartial } from '@xenopomp/advanced-types';

const commentPatch = {
  name: 'Gleb Uymanov',
  rating: 5,
  comment: 'Good service. Approved!',
  serviceId: 1,
  uuid: 'dev_id',
};

export type CommentPatchType = SelectivePartial<
  typeof commentPatch,
  'name' | 'comment' | 'uuid'
>;
