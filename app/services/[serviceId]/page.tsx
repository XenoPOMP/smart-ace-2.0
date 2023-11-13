import { AsyncFC, WithParams } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC, Suspense } from 'react';

import Loader from '@/src/components/ui/Loader/Loader';
import CommentSection from '@/src/sections/CommentSection/CommentSection';

const ServiceWithIdPage: AsyncFC<WithParams<{}, 'serviceId'>> = async ({
  params,
}) => {
  const { serviceId } = params;

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
      <p>ID: {serviceId}</p>

      <Suspense fallback={<SectionLoader />}>
        <CommentSection className={cn('mt-[1em]')} serviceId={serviceId} />
      </Suspense>
    </>
  );
};

export default ServiceWithIdPage;
