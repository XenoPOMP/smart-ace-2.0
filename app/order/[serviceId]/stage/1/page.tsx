'use client';

import { WithParams } from '@xenopomp/advanced-types';
import { FC, useState } from 'react';

import ContactForm from '@/src/components/ui/ContactForm/ContactForm';
import { servicesData } from '@/src/data/services.data';
import { createQueryString } from '@/src/utils/createQueryString';

const YourNameStagePage: FC<WithParams<{}, 'serviceId'>> = ({ params }) => {
  const { serviceId } = params;

  const currentService = servicesData.groups
    .flatMap(group => group.services)
    .find(service => service.id === +serviceId);

  const [name, setName] = useState<string | undefined>(undefined);

  return (
    <>
      <ContactForm
        caption={currentService?.title}
        subCaption={'Как к вам обращаться?'}
        items={[
          {
            title: '',
            placeholder: 'Введите ваше имя',
            reactState: {
              state: name,
              setState: setName,
            },
            type: 'default',
          },
        ]}
        links={{
          next: `/order/${serviceId}/stage/2?${createQueryString({
            name: name ?? '',
          })}`,
        }}
      />
    </>
  );
};

export default YourNameStagePage;
