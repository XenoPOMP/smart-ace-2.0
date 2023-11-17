import { WithParams, WithSearchParams } from '@xenopomp/advanced-types';
import { FC } from 'react';

import ContactForm from '@/src/components/ui/ContactForm/ContactForm';
import { servicesData } from '@/src/data/services.data';

const FinalStagePage: FC<
  WithSearchParams<WithParams<{}, 'serviceId'>, 'name' | 'email'>
> = ({ params, searchParams }) => {
  const { serviceId } = params;

  const currentService = servicesData.groups
    .flatMap(group => group.services)
    .find(service => service.id === +serviceId);

  return (
    <>
      <ContactForm />
    </>
  );
};

export default FinalStagePage;
