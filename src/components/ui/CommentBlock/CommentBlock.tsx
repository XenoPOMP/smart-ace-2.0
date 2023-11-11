import cn from 'classnames';
import { FC } from 'react';

import { servicesData } from '@/src/data/services.data';

import styles from './CommentBlock.module.scss';
import type { CommentBlockProps } from './CommentBlock.props';

const CommentBlock: FC<CommentBlockProps> = ({ comment }) => {
  const { id, name, comment: text, rating, serviceId, uuid } = comment;

  const generatedAvatarPath = `https://api.dicebear.com/7.x/identicon/svg?seed=${name}`;

  return (
    <div className={cn('mb-[1em]')}>
      <p>
        Comment with ID{' '}
        <b>
          <i>{id}</i>
        </b>
      </p>

      <p>
        Written by{' '}
        <b>
          <i>
            {name} ({uuid ?? 'NO_UUID'})
          </i>
        </b>
      </p>

      <p>
        <img
          src={generatedAvatarPath}
          alt={`${name}\`s avatar`}
          style={{
            width: 'min(25%, 2em)',
          }}
        />
      </p>

      <p>{text}</p>

      <p>
        Referred to service{' '}
        {servicesData.find(ser => ser.id === serviceId)?.title}
      </p>

      <p>Rating: {rating} / 5</p>
    </div>
  );
};

export default CommentBlock;
