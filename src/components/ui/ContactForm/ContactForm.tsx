'use client';

import { VariableFC, WithParams } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { ArrowLeft, ArrowRight, HelpCircle } from 'lucide-react';
import { useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

import Button from '@/src/components/ui/Button/Button';
import CustomLink from '@/src/components/ui/CustomLink/CustomLink';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import useBoolean from '@/src/hooks/useBoolean';
import { useUniqueId } from '@/src/hooks/useUniqueId';

import styles from './ContactForm.module.scss';
import type { ContactFormProps } from './ContactForm.props';

const ContactForm: VariableFC<'form', ContactFormProps, 'children'> = ({
  className,
  caption,
  subCaption,
  items,
  links,
  ...props
}) => {
  const [isFormValid, toggleIsFormValid, setIsFormValid] = useBoolean(true);

  const revalidateForm = () => {
    setIsFormValid(false);
  };

  useEffect(
    () => {
      revalidateForm();
    },
    items?.map(item => item.reactState.state)
  );

  return (
    <UiContainer
      as={'form'}
      maxWidth={'947px'}
      className={cn(styles.contactForm, className)}
      {...props}
    >
      <header>
        <h2>{caption}</h2>
      </header>

      <section className={cn(styles.body)}>
        <h3>{subCaption}</h3>

        <article className={cn(styles.items)}>
          {items?.map(({ title, placeholder, help, reactState }, index) => {
            const inputId = useUniqueId(id => {
              return `input-${id}`;
            });

            return (
              <>
                <label htmlFor={inputId}>{title}</label>

                <input
                  placeholder={placeholder}
                  id={inputId}
                  content={reactState.state}
                  onChange={ev => {
                    reactState.setState(ev.currentTarget.value);
                  }}
                />

                <div className={cn('w-full')}>
                  {!isUndefined(help) && (
                    <>
                      <Button
                        variant={'header'}
                        className={cn(
                          styles.help,
                          '!bg-inp-back aspect-square !text-ord-font-primary',
                          'cursor-help'
                        )}
                        data-tooltip-id={`${inputId}-tooltip`}
                      >
                        <HelpCircle />
                      </Button>

                      <Tooltip
                        id={`${inputId}-tooltip`}
                        className={cn('!bg-popup-back !text-popup-font')}
                        place={'right'}
                      >
                        {help}
                      </Tooltip>
                    </>
                  )}
                </div>
              </>
            );
          })}
        </article>
      </section>

      <footer>
        {!isUndefined(links?.prev) && !isUndefined(links) && (
          <CustomLink
            href={links.prev}
            applyStyles={false}
            className={cn(styles.prev)}
          >
            <Button
              variant={'header'}
              className={cn('aspect-square')}
              blocked={!isFormValid}
            >
              <ArrowLeft height={'1.4em'} />
            </Button>
          </CustomLink>
        )}

        {!isUndefined(links?.middle) && !isUndefined(links) && (
          <CustomLink
            href={links.middle}
            applyStyles={false}
            className={cn(styles.middle)}
          >
            <Button
              variant={'secondary'}
              className={cn('w-full h-full font-black text-[1.25em]')}
              blocked={!isFormValid}
            >
              ОК
            </Button>
          </CustomLink>
        )}

        {!isUndefined(links?.next) && !isUndefined(links) && (
          <CustomLink
            href={links.next}
            applyStyles={false}
            className={cn(styles.next)}
          >
            <Button
              variant={'header'}
              className={cn('aspect-square')}
              blocked={!isFormValid}
            >
              <ArrowRight height={'1.4em'} />
            </Button>
          </CustomLink>
        )}
      </footer>
    </UiContainer>
  );
};

export default ContactForm;
