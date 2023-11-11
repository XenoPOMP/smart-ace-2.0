import { AsyncFC, WithSearchParams } from '@xenopomp/advanced-types';
import axios, { AxiosResponse } from 'axios';
import cn from 'classnames';
import { FC } from 'react';

import ServiceSearchBlock from '@/src/components/blocks/ServiceSearchBlock/ServiceSearchBlock';
import PageWithPatch from '@/src/components/layout/PageWithPatch/PageWithPatch';
import { IComment } from '@/src/interfaces/Comment.interface';

import styles from './ServicePage.module.scss';

const ServicePage: FC<{}> = ({}) => {
  // const { data: services } = await axios.get<IComment[]>(
  //   `${process.env.API_URL}/comments`
  // );

  return <>Sus</>;
};

export default ServicePage;
