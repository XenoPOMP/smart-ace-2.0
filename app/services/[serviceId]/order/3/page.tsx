import { WithParams } from '@xenopomp/advanced-types';
import { FC } from 'react';

const FinalOrderPage: FC<WithParams<{}, 'serviceId'>> = ({ params }) => {
  const { serviceId } = params;

  return <>Order service with ID: {serviceId}. Stage 3</>;
};

export default FinalOrderPage;
