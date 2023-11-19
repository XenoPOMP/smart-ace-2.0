import { AsyncVariableFC } from '@xenopomp/advanced-types';
import { isNullOrUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { FC, ReactNode, Suspense } from 'react';

import HardnessMeter from '@/src/components/ui/HardnessMeter/HardnessMeter';
import Loader from '@/src/components/ui/Loader/Loader';
import ServiceCard from '@/src/components/ui/ServiceCard/ServiceCard';
import ServiceRating from '@/src/components/ui/ServiceRating/ServiceRating';
import { Hardness } from '@/src/interfaces/Service.interface';

import styles from './ServiceCardGrid.module.scss';
import type { ServiceCardGridProps } from './ServiceCardGrid.props';

const ServiceCardGrid: AsyncVariableFC<
  'section',
  ServiceCardGridProps,
  'children'
> & {
  Layout: FC;
} = async ({ className, service, ...props }) => {
  const Element: FC<{ target?: ReactNode }> = ({ target }) => {
    if (isNullOrUndefined(target)) {
      return <strong>N/A</strong>;
    }

    return <strong>{target}</strong>;
  };

  return (
    <>
      {service && (
        <section className={cn(styles.serviceGrid, className)} {...props}>
          <ServiceCard title={'Цена'} className={cn(styles.card)}>
            <span>
              от <Element target={service?.minPrice} /> рублей
            </span>
          </ServiceCard>

          <ServiceCard title={'Время исполнения'} className={cn(styles.card)}>
            <span>
              {service?.executionTime ? (
                <>
                  от <Element target={service?.executionTime?.at(0)} /> до{' '}
                  <Element target={service?.executionTime?.at(1)} /> недель
                </>
              ) : (
                <Element target={undefined} />
              )}
            </span>
          </ServiceCard>

          <ServiceCard title={'Сложность'} className={cn(styles.card)}>
            <span>
              <Element
                target={
                  isNullOrUndefined(service?.hardness) ? undefined : (
                    <>
                      <HardnessMeter hardness={service.hardness} />
                    </>
                  )
                }
              />
            </span>
          </ServiceCard>

          <ServiceCard title={'Рейтинг'} className={cn(styles.card)}>
            <ServiceRating id={service.id} />
          </ServiceCard>
        </section>
      )}
    </>
  );
};

ServiceCardGrid.Layout = ({}) => {
  return (
    <>
      <section className={cn(styles.serviceGrid)}>
        <ServiceCard title={'Цена'} className={cn(styles.card)}>
          <Loader />
        </ServiceCard>

        <ServiceCard title={'Время исполнения'} className={cn(styles.card)}>
          <Loader />
        </ServiceCard>

        <ServiceCard title={'Сложность'} className={cn(styles.card)}>
          <Loader />
        </ServiceCard>

        <ServiceCard title={'Рейтинг'} className={cn(styles.card)}>
          <Loader />
        </ServiceCard>
      </section>
    </>
  );
};

export default ServiceCardGrid;
