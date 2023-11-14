import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import CommentBlock from '@/src/components/blocks/CommentBlock/CommentBlock';

import styles from './CommentLoader.module.scss';
import type { CommentLoaderProps } from './CommentLoader.props';

const CommentLoader: VariableFC<
  typeof CommentBlock,
  CommentLoaderProps,
  'comment' | 'variant'
> = ({ className, ...props }) => {
  return (
    <CommentBlock
      className={cn(className)}
      comment={{
        id: -1,
        rating: -1,
        serviceId: -1,
        uuid: 'LOADER_COMMENT_BLOCK',
      }}
      variant={'loader'}
      {...props}
    />
  );
};

export default CommentLoader;
