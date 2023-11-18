import { Defined, VariableFC } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import CustomLink from '@/src/components/ui/CustomLink/CustomLink';
import Tag from '@/src/components/ui/Tag/Tag';
import { servicesData } from '@/src/data/services.data';

import styles from './ServiceSearchBlock.module.scss';
import type { ServiceSearchBlockProps } from './ServiceSearchBlock.props';

const ServiceSearchBlock: VariableFC<
  'section',
  ServiceSearchBlockProps,
  'children'
> = ({ linkTagStyle = 'default', className, ...props }) => {
  const currentVersion = servicesData.version;

  const tagStyle: Record<Defined<typeof linkTagStyle>, string> = {
    default: 'items-center',
    alignLeft: 'flex-col items-start',
  };

  return (
    <section className={cn('', styles.search, className)} {...props}>
      <article className={cn('', styles.links)}>
        {servicesData.groups.map(group => {
          const { title: groupTitle } = group;

          return (
            <div className={cn(styles.group)}>
              <h3>
                <strong>{groupTitle}</strong>
              </h3>

              <div className={cn(styles.linkGroup)}>
                {group.services.map(service => {
                  const { id, title, version } = service;

                  const isNew = version >= currentVersion;

                  return (
                    <CustomLink
                      href={`/services/${id}`}
                      className={cn(
                        `flex flex-col-reverse ${tagStyle[linkTagStyle]} gap-x-[.4em]`,
                        '!items-start',
                        styles.link
                      )}
                      applyStyles={false}
                    >
                      <div className={cn(styles.body)}>
                        <h4>{title}</h4>
                      </div>

                      {isNew && (
                        <Tag
                          className={cn(
                            'bg-red-500 text-white text-[.65em] px-[.5em]',
                            styles.tag
                          )}
                          style={{
                            borderRadius: '.5em .5em 0 0',
                          }}
                        >
                          Новинка
                        </Tag>
                      )}
                    </CustomLink>
                  );
                })}
              </div>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default ServiceSearchBlock;
