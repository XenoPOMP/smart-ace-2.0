import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';
import TextOverflow from 'react-text-overflow';

import Rating from '@/src/components/ui/Rating/Rating';
import { servicesData } from '@/src/data/services.data';

import styles from './CommentBlock.module.scss';
import type { CommentBlockProps } from './CommentBlock.props';

const CommentBlock: VariableFC<'article', CommentBlockProps, 'children'> = ({
  comment,
  className,
  ...props
}) => {
  const { id, name, comment: text, rating, serviceId, uuid } = comment;

  const generatedAvatarPath = `https://api.dicebear.com/7.x/identicon/svg?seed=${name}`;

  return (
    <article className={cn('', styles.commentBlock, className)} {...props}>
      <aside
        style={{
          width: 'max-content',
        }}
      >
        <img
          src={generatedAvatarPath}
          alt={`${name}\`s avatar`}
          style={{
            width: '2.5em',
          }}
        />
      </aside>

      <div>
        <header>
          <h2 className={cn('text-[1.25em]')}>
            <strong>
              <TextOverflow text={name ?? 'Аноним'} />
            </strong>
          </h2>
        </header>

        <p
          className={cn('')}
          style={{
            lineHeight: '1em',
          }}
        >
          {text}
        </p>
      </div>

      <aside
        className={cn('flex justify-center items-center h-full max-h-[4em]')}
      >
        <Rating rating={rating} />
      </aside>
    </article>
  );
};

export default CommentBlock;
