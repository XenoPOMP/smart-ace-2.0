import { AsyncFC, WithParams } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC, Suspense } from 'react';

import Loader from '@/src/components/ui/Loader/Loader';
import { servicesData } from '@/src/data/services.data';
import CommentSection from '@/src/sections/CommentSection/CommentSection';

import styles from './ServiceWithIdPage.module.scss';

const ServiceWithIdPage: AsyncFC<WithParams<{}, 'serviceId'>> = async ({
  params,
}) => {
  const { serviceId } = params;

  const currentService = servicesData.find(ser => ser.id === +serviceId);

  const SectionLoader: FC = () => {
    return (
      <div
        className={cn(
          'flex w-full justify-center items-center text-service-font'
        )}
        style={{
          marginTop: 'calc(var(--global-padding) / 4)',
        }}
      >
        <Loader />
      </div>
    );
  };

  return (
    <>
      <header className={cn(styles.pageHeader)}>
        <h2>{currentService?.title}</h2>
      </header>

      <Suspense fallback={<SectionLoader />}>
        <CommentSection className={cn('mt-[1em]')} serviceId={serviceId} />
      </Suspense>

      <footer>Footer here</footer>
    </>
  );
};

export default ServiceWithIdPage;
