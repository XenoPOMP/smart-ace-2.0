import { AsyncFC, WithParams } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { randomUUID } from 'crypto';
import { FC, Suspense } from 'react';

import ServiceFooterBlock from '@/src/components/blocks/ServiceFooterBlock/ServiceFooterBlock';
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

      <Suspense
        fallback={
          <>
            {[...new Array(5)].map((item, index) => {
              return (
                <>
                  <CommentLoader key={`comment-loader-${index}`} />
                </>
              );
            })}
          </>
        }
      >
        <CommentSection
          className={cn('mt-[1em]')}
          serviceId={serviceId}
          sessionId={randomId}
        />
      </Suspense>

      <ServiceFooterBlock serviceId={+serviceId} />
    </>
  );
};

export default ServiceWithIdPage;
