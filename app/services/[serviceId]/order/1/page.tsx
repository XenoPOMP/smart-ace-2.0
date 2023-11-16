import { WithParams } from '@xenopomp/advanced-types';
import { FC } from 'react';

const ChooseNameOrderPage: FC<WithParams<{}, 'serviceId'>> = ({ params }) => {
  const { serviceId } = params;

  return <>Order service with ID: {serviceId}. Stage 1</>;
};

export default ChooseNameOrderPage;
