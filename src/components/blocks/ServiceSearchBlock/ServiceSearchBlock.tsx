import { Defined } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import CustomLink from '@/src/components/ui/CustomLink/CustomLink';
import Tag from '@/src/components/ui/Tag/Tag';
import { servicesData } from '@/src/data/services.data';

import styles from './ServiceSearchBlock.module.scss';
import type { ServiceSearchBlockProps } from './ServiceSearchBlock.props';

const ServiceSearchBlock: FC<ServiceSearchBlockProps> = ({
  linkTagStyle = 'default',
}) => {
  const currentVersion = servicesData.version;

  const tagStyle: Record<Defined<typeof linkTagStyle>, string> = {
    default: 'items-center',
    alignLeft: 'flex-col items-start',
  };

  return (
    <section className={cn('')}>
      <p>Search what you need</p>

      <article className={cn('flex flex-col')}>
        {servicesData.groups.map(group => {
          const { title: groupTitle } = group;

          return (
            <>
              <strong>{groupTitle}</strong>

              {group.services.map(service => {
                const { id, title, version } = service;

                const isNew = currentVersion === version;

                return (
                  <CustomLink
                    href={`/services/${id}`}
                    className={cn(
                      `flex ${tagStyle[linkTagStyle]} flex-wrap gap-x-[.4em]`
                    )}
                  >
                    {title}{' '}
                    {isNew && (
                      <Tag className={cn('bg-red-500 text-white')}>Новинка</Tag>
                    )}
                  </CustomLink>
                );
              })}
            </>
          );
        })}
      </article>
    </section>
  );
};

export default ServiceSearchBlock;
