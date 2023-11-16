import { WithParams } from '@xenopomp/advanced-types';
import { FC } from 'react';

const OrderPage: FC<WithParams<{}, 'serviceId'>> = ({ params }) => {
  const { serviceId } = params;

  return <>Order service with ID: {serviceId}. Stage -1</>;
};

export default OrderPage;
