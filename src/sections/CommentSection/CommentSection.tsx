import { AsyncFC } from '@xenopomp/advanced-types';
import axios from 'axios';
import cn from 'classnames';
import { FC } from 'react';

import CommentBlock from '@/src/components/ui/CommentBlock/CommentBlock';
import { IComment } from '@/src/interfaces/Comment.interface';
import { createQueryString } from '@/src/utils/createQueryString';

import styles from './CommentSection.module.scss';
import type { CommentSectionProps } from './CommentSection.props';

const CommentSection: AsyncFC<CommentSectionProps> = async ({ serviceId }) => {
  const comments = await axios.get<Array<IComment>>(
    `${process.env.API_URL}/comments?${createQueryString({ serviceId })}`
  );

  return (
    <section>
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
