import { AsyncFC, AsyncVariableFC } from '@xenopomp/advanced-types';
import axios from 'axios';
import cn from 'classnames';
import { FC } from 'react';

import CommentBlock from '@/src/components/blocks/CommentBlock/CommentBlock';
import { IComment } from '@/src/interfaces/Comment.interface';
import { createQueryString } from '@/src/utils/createQueryString';

import styles from './CommentSection.module.scss';
import type { CommentSectionProps } from './CommentSection.props';

const CommentSection: AsyncVariableFC<
  'section',
  CommentSectionProps,
  'children'
> = async ({ serviceId, ...props }) => {
  const comments = await axios.get<Array<IComment>>(
    `${process.env.API_URL}/comments?${createQueryString({ serviceId })}`
  );

  return (
    <section {...props}>
      {comments.data.length === 0 ? (
        <>No comments yet</>
      ) : (
        comments.data.map(comment => {
          return (
            <>
              <CommentBlock comment={comment} />
            </>
          );
        })
      )}
    </section>
  );
};

export default CommentSection;
