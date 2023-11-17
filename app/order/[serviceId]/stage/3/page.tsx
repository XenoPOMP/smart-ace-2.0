import { WithParams, WithSearchParams } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import ContactForm from '@/src/components/ui/ContactForm/ContactForm';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { servicesData } from '@/src/data/services.data';
import { isDev } from '@/src/utils/isDev';

const FinalStagePage: FC<
  WithSearchParams<WithParams<{}, 'serviceId'>, 'name' | 'email'>
> = ({ params, searchParams }) => {
  const { serviceId } = params;
  const { name, email } = searchParams;

  const currentService = servicesData.groups
    .flatMap(group => group.services)
    .find(service => service.id === +serviceId);

  return (
    <>
      {isDev() && (
        <>
          <UiContainer
            as={'section'}
            maxWidth={'947px'}
            className={cn('!mb-[2em]')}
          >
            <div>
              Name: <strong>{name}</strong>
            </div>

            <div>
              Email: <strong>{email}</strong>
            </div>
          </UiContainer>
        </>
      )}

      <ContactForm
        caption={currentService?.title}
        subCaption={
          'Все готово!\n' + 'Совсем скоро наш менеджер свяжется с вами.'
        }
        links={{
          middle: '/',
        }}
      />
    </>
  );
};

export default FinalStagePage;
