'use client';

import { WithParams, WithSearchParams } from '@xenopomp/advanced-types';
import { FC, useState } from 'react';

import ContactForm from '@/src/components/ui/ContactForm/ContactForm';
import { servicesData } from '@/src/data/services.data';
import { createQueryString } from '@/src/utils/createQueryString';

const EmailOrderPage: FC<
  WithSearchParams<WithParams<{}, 'serviceId'>, 'name'>
> = ({ params, searchParams }) => {
  const { serviceId } = params;

  const currentService = servicesData.groups
    .flatMap(group => group.services)
    .find(service => service.id === +serviceId);

  const [email, setEmail] = useState<string | undefined>(undefined);

  return (
    <>
      <ContactForm
        caption={currentService?.title}
        subCaption={'Как с вами связаться?'}
        items={[
          {
            title: 'Email',
            placeholder: 'Введите ваш email',
            reactState: {
              state: email,
              setState: setEmail,
            },
            type: 'email',
          },
        ]}
        links={{
          next: `/order/${serviceId}/stage/3?${createQueryString({
            ...searchParams,
            email: email ?? '',
          })}`,
        }}
      />
    </>
  );
};

export default EmailOrderPage;
