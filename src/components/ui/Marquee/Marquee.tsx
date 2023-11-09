import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC, Fragment } from 'react';

import styles from './Marquee.module.scss';
import type { MarqueeProps } from './Marquee.props';

const Marquee: VariableFC<'div', MarqueeProps> = ({
  children,
  behavior = 'scroll',
  direction = 'left',
  loop = false,
  scrollSpeed = 6,
  scrollDelay = 85,
  ...props
}) => {
  return (
    <>
      {/* @ts-ignore */}
      <marquee
        behavior={behavior}
        direction={direction}
        loop={loop}
        scrollamount={scrollSpeed}
        scrolldelay={scrollDelay >= 60 ? scrollDelay : undefined}
        truespeed={scrollDelay < 60 ? scrollDelay : undefined}
        {...props}
      >
        {children}
        {/* @ts-ignore */}
      </marquee>
    </>
  );
};

export default Marquee;
