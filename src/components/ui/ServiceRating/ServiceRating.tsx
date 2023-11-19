import { AsyncVariableFC } from '@xenopomp/advanced-types';
import { roundNumber } from '@xenopomp/advanced-utils';
import axios from 'axios';
import cn from 'classnames';
import { FC } from 'react';

import Rating from '@/src/components/ui/Rating/Rating';

import styles from './ServiceRating.module.scss';
import type { ServiceRatingProps } from './ServiceRating.props';

const ServiceRating: AsyncVariableFC<
  typeof Rating,
  ServiceRatingProps,
  'rating'
> = async ({ id, ...props }) => {
  let averageRating: number;

  try {
    averageRating = (
      await axios.get<number>(
        `${process.env.API_URL}/services/rating/average/${id}`
      )
    ).data;
  } catch (e) {
    return 'N/A';
  }

  if (isNaN(averageRating)) {
    return 'N/A';
  }

  return (
    <>
      <Rating {...props} rating={roundNumber(averageRating, 2)} />
    </>
  );
};

export default ServiceRating;
