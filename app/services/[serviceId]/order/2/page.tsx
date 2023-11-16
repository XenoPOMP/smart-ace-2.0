import { WithParams } from '@xenopomp/advanced-types';
import { FC } from 'react';

const ContactOrderPage: FC<WithParams<{}, 'serviceId'>> = ({ params }) => {
  const { serviceId } = params;

  return <>Order service with ID: {serviceId}. Stage 2</>;
};

export default ContactOrderPage;
