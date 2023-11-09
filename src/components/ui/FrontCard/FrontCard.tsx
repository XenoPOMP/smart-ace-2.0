import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import frontCardMockImg from '@/public/images/mocks/front-card-mock.png';
import BackgroundImage from '@/src/components/ui/BackgroundImage/BackgroundImage';
import CustomLink from '@/src/components/ui/CustomLink/CustomLink';

import styles from './FrontCard.module.scss';
import type { FrontCardProps } from './FrontCard.props';

const FrontCard: VariableFC<'section', FrontCardProps, 'children'> = ({
  className,
  title,
  subTitle,
  desc,
  href = '/',
  ...props
}) => {
  return (
    <CustomLink href={href}>
      <section className={cn(styles.frontCard, className)} {...props}>
        <header>
          <h2>{title}</h2>

          <BackgroundImage
            src={frontCardMockImg}
            alt={'Mock background'}
            className={cn('')}
            objectFit={'contain'}
          />
        </header>

        <footer className={cn(styles.body)}>
          <div
            className={cn('bg-[currentColor] h-[2px] w-[1.3em] mb-[.5em]')}
          ></div>

          <article className={cn(styles.content)}>
            <h3>{subTitle}</h3>

            <p>{desc}</p>
          </article>

          <div className={cn('flex justify-end mt-[1em]')}>
            <svg
              width='1em'
              viewBox='0 0 19 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 9C0.447715 9 0 9.44772 0 10C0 10.5523 0.447715 11 1 11V9ZM18.7071 10.7071C19.0976 10.3166 19.0976 9.68342 18.7071 9.29289L12.3431 2.92893C11.9526 2.53841 11.3195 2.53841 10.9289 2.92893C10.5384 3.31946 10.5384 3.95262 10.9289 4.34315L16.5858 10L10.9289 15.6569C10.5384 16.0474 10.5384 16.6805 10.9289 17.0711C11.3195 17.4616 11.9526 17.4616 12.3431 17.0711L18.7071 10.7071ZM1 11H18V9H1V11Z'
                className={cn('fill-[currentColor]')}
              />
            </svg>
          </div>
        </footer>
      </section>
    </CustomLink>
  );
};

export default FrontCard;
