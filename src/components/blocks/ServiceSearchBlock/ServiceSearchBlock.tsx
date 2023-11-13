import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import { servicesData } from '@/src/data/services.data';

import styles from './ServiceSearchBlock.module.scss';
import type { ServiceSearchBlockProps } from './ServiceSearchBlock.props';

const ServiceSearchBlock: FC<ServiceSearchBlockProps> = ({}) => {
  return (
    <section className={cn('')}>
      <p>Search what you need</p>

      <article className={cn('flex flex-col')}>
        {servicesData.map(service => {
          const { id, title } = service;

          return <Link href={`/services/${id}`}>{title}</Link>;
        })}
      </article>
    </section>
  );
};

export default ServiceSearchBlock;
