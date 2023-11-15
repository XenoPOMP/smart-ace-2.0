import { awaitExpression } from '@babel/types';
import { AsyncFC, AsyncVariableFC } from '@xenopomp/advanced-types';
import axios from 'axios';
import cn from 'classnames';
import { randomUUID } from 'crypto';
import { FC } from 'react';

import { reloadComments } from '@/src/actions/loadComments';
import CommentBlock from '@/src/components/blocks/CommentBlock/CommentBlock';
import CreateCommentSection from '@/src/components/ui/CreateCommentSection/CreateCommentSection';
import { IComment } from '@/src/interfaces/Comment.interface';
import { createQueryString } from '@/src/utils/createQueryString';

import styles from './CommentSection.module.scss';
import type { CommentSectionProps } from './CommentSection.props';

const CommentSection: AsyncVariableFC<
  'section',
  CommentSectionProps,
  'children'
> = async ({ serviceId, className, sessionId, ...props }) => {
  let comments: Array<IComment> = [];

  comments = await reloadComments({ serviceId });

  return (
    <>
      <CreateCommentSection
        className={cn('mt-[1em]')}
        serviceId={+serviceId}
        uuid={sessionId}
      />

      <section className={cn('', className)} {...props}>
        {comments.length === 0 ? (
          <article className={cn('text-center text-service-title mb-[1em]')}>
            Здесь пока нет комментариев
          </article>
        ) : (
          comments.map(comment => {
            return (
              <>
                <CommentBlock comment={comment} sessionId={sessionId} />
              </>
            );
          })
        )}
      </section>
    </>
  );
};

export default CommentSection;
