import { AsyncFC, WithParams } from '@xenopomp/advanced-types';
import axios from 'axios';
import { FC } from 'react';

import CommentBlock from '@/src/components/ui/CommentBlock/CommentBlock';
import { IComment } from '@/src/interfaces/Comment.interface';
import { createQueryString } from '@/src/utils/createQueryString';

const ServiceWithIdPage: AsyncFC<WithParams<{}, 'serviceId'>> = async ({
  params,
}) => {
  const { serviceId } = params;

  const comments = await axios.get<Array<IComment>>(
    `${process.env.API_URL}/comments?${createQueryString({ serviceId })}`
  );

  return (
    <>
      <p>ID: {serviceId}</p>

      {comments.data.map(comment => {
        return (
          <>
            <CommentBlock comment={comment} />
          </>
        );
      })}
    </>
  );
};

export default ServiceWithIdPage;
