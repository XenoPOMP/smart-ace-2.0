'use client';

import { WithParams, WithSearchParams } from '@xenopomp/advanced-types';
import axios, { AxiosResponse } from 'axios';
import cn from 'classnames';
import { FC, useEffect } from 'react';

import Button from '@/src/components/ui/Button/Button';
import ContactForm from '@/src/components/ui/ContactForm/ContactForm';
import Loader from '@/src/components/ui/Loader/Loader';
import StateSuspense from '@/src/components/ui/StateSuspense/StateSuspense';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { servicesData } from '@/src/data/services.data';
import useBoolean from '@/src/hooks/useBoolean';
import { ContactPatchType } from '@/src/types/ContactPatchType';
import { isDev } from '@/src/utils/isDev';

const FinalStagePage: FC<
  WithSearchParams<WithParams<{}, 'serviceId'>, 'name' | 'email'>
> = ({ params, searchParams }) => {
  const [isSending, toggleIsSending, setIsSending] = useBoolean(false);
  const [isError, toggleIsError, setIsError] = useBoolean(false);

  const { serviceId } = params;
  const { name, email } = searchParams;

  const currentService = servicesData.groups
    .flatMap(group => group.services)
    .find(service => service.id === +serviceId);

  const sendContacts = () => {
    setIsSending(true);

    return;

    axios
      .patch<any, AxiosResponse<any, any>, ContactPatchType>(
        `${process.env.API_URL}/contacts`,
        {
          name,
          email,
        }
      )
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  useEffect(() => {
    sendContacts();
  }, []);

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

      <StateSuspense
        isLoading={isSending}
        fallback={
          <div
            className={cn(
              'w-full h-full flex justify-center items-center text-ord-font-primary'
            )}
          >
            <Loader />
          </div>
        }
      >
        {isError ? (
          <>
            <ContactForm
              caption={currentService?.title}
              subCaption={
                <>
                  <p>Произошла ошибка при отправке формы!</p>

                  <Button
                    variant={'secondary'}
                    className={cn(
                      'px-[2em] py-[1em] text-[.75em] mt-[1em] rounded-[1em]'
                    )}
                    onClick={() => {
                      sendContacts();
                    }}
                  >
                    Попробовать еще раз
                  </Button>
                </>
              }
            />
          </>
        ) : (
          <>
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
        )}
      </StateSuspense>
    </>
  );
};

export default FinalStagePage;
