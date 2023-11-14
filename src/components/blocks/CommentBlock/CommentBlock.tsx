import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';
import TextOverflow from 'react-text-overflow';

import LoadingRect from '@/src/components/loaders/LoadingRect/LoadingRect';
import Rating from '@/src/components/ui/Rating/Rating';
import { servicesData } from '@/src/data/services.data';
import { isDev } from '@/src/utils/isDev';

import styles from './CommentBlock.module.scss';
import type { CommentBlockProps } from './CommentBlock.props';

const CommentBlock: VariableFC<'article', CommentBlockProps, 'children'> = ({
  comment,
  sessionId,
  className,
  variant = 'default',
  delay = 0,
  ...props
}) => {
  const { id, name, comment: text, rating, serviceId, uuid } = comment;

  const generatedAvatarPath = `https://api.dicebear.com/7.x/identicon/svg?seed=${name}`;

  const canBeChanged = uuid === sessionId;

  return (
    <article className={cn('', styles.commentBlock, className)} {...props}>
      <aside
        style={{
          width: 'max-content',
        }}
      >
        {variant === 'default' ? (
          <>
            <img
              src={generatedAvatarPath}
              alt={`${name}\`s avatar`}
              style={{
                width: '2.5em',
              }}
            />
          </>
        ) : (
          <>
            <LoadingRect
              className={cn('w-[2.5em] aspect-square bg-head-icon-color')}
            />
          </>
        )}
      </aside>

      <div>
        <header>
          {variant === 'default' ? (
            <>
              <h3 className={cn('text-[1.25em]')}>
                <strong>
                  <TextOverflow text={name ?? 'Аноним'} />
                </strong>
              </h3>
            </>
          ) : (
            <>
              <LoadingRect
                className={cn(
                  'w-[10ch] h-[1em] aspect-square bg-head-icon-color'
                )}
              />
            </>
          )}
        </header>

        <p
          className={cn('')}
          style={{
            lineHeight: '1em',
          }}
        >
          {text}
        </p>

        {isDev() && variant === 'default' && (
          <footer className={cn('text-[.75em] mt-[1em]')}>
            <h3>
              <b>Dev info</b>
            </h3>

            <div>
              Rating: <b>{rating}</b>
            </div>

            <div>
              Author ID: <b>{uuid ?? 'None'}</b>
            </div>

            <div>
              Session ID: <b>{sessionId}</b>
            </div>

            <div>
              Can be changed: <b>{canBeChanged ? 'True' : 'False'}</b>
            </div>
          </footer>
        )}
      </div>

      <aside
        className={cn(
          'flex flex-col justify-center items-center h-full max-h-[4em]'
        )}
      >
        {variant === 'default' ? (
          <Rating rating={rating} />
        ) : (
          <LoadingRect
            className={cn('w-[5ch] h-[1em] aspect-square bg-head-icon-color')}
          />
        )}
      </aside>
    </article>
  );
};

export default CommentBlock;
