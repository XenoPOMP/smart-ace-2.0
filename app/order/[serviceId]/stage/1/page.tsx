'use client';

import { WithParams } from '@xenopomp/advanced-types';
import { FC, useState } from 'react';

import ContactForm from '@/src/components/ui/ContactForm/ContactForm';
import { servicesData } from '@/src/data/services.data';

const YourNameStagePage: FC<WithParams<{}, 'serviceId'>> = ({ params }) => {
  const { serviceId } = params;

  const currentService = servicesData.groups
    .flatMap(group => group.services)
    .find(service => service.id === +serviceId);

  const [email, setEmail] = useState<string | undefined>(undefined);
  const [vk, setVk] = useState<string | undefined>(undefined);
  const [tg, setTg] = useState<string | undefined>(undefined);

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
          },
          {
            title: 'VK',
            placeholder: 'Введите ссылку на ваш ВК',
            help: 'Необязательное поле',
            reactState: {
              state: vk,
              setState: setVk,
            },
          },
          {
            title: 'Telegram',
            placeholder: 'Введите ваш тег Телеграм',
            help: 'Необязательное поле',
            reactState: {
              state: tg,
              setState: setTg,
            },
          },
        ]}
        links={{
          next: `/order/${serviceId}/stage/2`,
        }}
      />
    </>
  );
};

export default YourNameStagePage;
