import { AsyncFC, WithParams } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { randomUUID } from 'crypto';
import { FC, Suspense } from 'react';

import CommentLoader from '@/src/components/loaders/CommentLoader/CommentLoader';
import CreateCommentSection from '@/src/components/ui/CreateCommentSection/CreateCommentSection';
import Loader from '@/src/components/ui/Loader/Loader';
import { servicesData } from '@/src/data/services.data';
import CommentSection from '@/src/sections/CommentSection/CommentSection';
import ServiceCardGrid from '@/src/sections/ServiceCardGrid/ServiceCardGrid';

import styles from './ServiceWithIdPage.module.scss';

const ServiceWithIdPage: AsyncFC<WithParams<{}, 'serviceId'>> = async ({
  params,
  ...props
}) => {
  const { serviceId } = params;

  const currentService = servicesData.groups
    .flat()
    .flatMap(group => group.services)
    .find(service => service.id === +serviceId);

  const randomId = randomUUID();

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

        {currentService?.desc && (
          <p
            className={cn('text-service-title max-w-[100%]')}
            style={{
              lineHeight: 'normal',
            }}
          >
            {currentService.desc}
          </p>
        )}
      </header>

      <Suspense fallback={<ServiceCardGrid.Layout />}>
        <ServiceCardGrid service={currentService} />
      </Suspense>

      {/*<CreateCommentSection*/}
      {/*  className={cn('mt-[1em]')}*/}
      {/*  serviceId={+serviceId}*/}
      {/*  uuid={randomId}*/}
      {/*/>*/}

      <Suspense
        fallback={
          <>
            <CommentLoader />
            <CommentLoader />
            <CommentLoader />
          </>
        }
      >
        <CommentSection
          className={cn('mt-[1em]')}
          serviceId={serviceId}
          sessionId={randomId}
        />
      </Suspense>

      <footer>Footer here</footer>
    </>
  );
};

export default ServiceWithIdPage;
