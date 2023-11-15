import axios from 'axios';

import { IComment } from '@/src/interfaces/Comment.interface';
import { createQueryString } from '@/src/utils/createQueryString';

const reloadComments = async () => {
  let comments: Array<IComment> = [];

  // try {
  //   comments = (
  //     await axios.get<Array<IComment>>(
  //       `${process.env.API_URL}/comments?${createQueryString({
  //         serviceId,
  //         sortByDate: 'desc',
  //       })}`
  //     )
  //   ).data;
  // } catch (e) {
  //   comments = [];
  // }
};
