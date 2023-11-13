import { AsyncFC, WithParams } from '@xenopomp/advanced-types';
import { Suspense } from 'react';

import CommentSection from '@/src/sections/CommentSection/CommentSection';

const ServiceWithIdPage: AsyncFC<WithParams<{}, 'serviceId'>> = async ({
  params,
}) => {
  const { serviceId } = params;

  return (
    <>
      <p>ID: {serviceId}</p>

      <Suspense fallback={<>Loading comments...</>}>
        <CommentSection serviceId={serviceId} />
      </Suspense>
    </>
  );
};

export default ServiceWithIdPage;
