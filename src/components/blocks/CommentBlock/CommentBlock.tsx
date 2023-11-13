import cn from 'classnames';
import { FC } from 'react';

import { servicesData } from '@/src/data/services.data';

import type { CommentBlockProps } from './CommentBlock.props';

const CommentBlock: FC<CommentBlockProps> = ({ comment }) => {
  const { id, name, comment: text, rating, serviceId, uuid } = comment;

  const generatedAvatarPath = `https://api.dicebear.com/7.x/identicon/svg?seed=${name}`;

  return (
    <div className={cn('mb-[1em]')}>
      <div>
        Comment with ID{' '}
        <b>
          <i>{id}</i>
        </b>
      </div>

      <div>
        Written by{' '}
        <b>
          <i>
            {name} ({uuid ?? 'NO_UUID'})
          </i>
        </b>
      </div>

      <div>
        <img
          src={generatedAvatarPath}
          alt={`${name}\`s avatar`}
          style={{
            width: 'min(25%, 2em)',
          }}
        />
      </div>

      <div>{text}</div>

      <div>
        Referred to service{' '}
        {servicesData.find(ser => ser.id === serviceId)?.title}
      </div>

      <div>Rating: {rating} / 5</div>
    </div>
  );
};

export default CommentBlock;
