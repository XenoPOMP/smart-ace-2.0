'use server';

import axios from 'axios';

import { IComment } from '@/src/interfaces/Comment.interface';
import { createQueryString } from '@/src/utils/createQueryString';

type ReloadPayload = {
  serviceId: string;
};

export const reloadComments = async ({ serviceId }: ReloadPayload) => {
  let comments: Array<IComment> = [];

  try {
    comments = (
      await axios.get<Array<IComment>>(
        `${process.env.API_URL}/comments?${createQueryString({
          serviceId,
          sortByDate: 'desc',
        })}`
      )
    ).data;
  } catch (e) {
    comments = [];
  }

  return comments;
};
