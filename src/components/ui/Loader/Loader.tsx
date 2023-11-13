'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { ComponentProps, FC } from 'react';

import styles from './Loader.module.scss';
import type { LoaderProps } from './Loader.props';

/**
 * Loader component.
 *
 * Change 'font-color' for changing bg color.
 *
 * @param className
 * @param props
 * @constructor
 */
const Loader: VariableFC<'div', LoaderProps, 'children'> = ({
  className,
  ...props
}) => {
  const dotStyleCommon = 'h-[.5em] w-[.5em] bg-current rounded-full';

  const durationUnit = 1;

  const animation: ComponentProps<typeof motion.div>['animate'] = {
    opacity: [0.5, 1, 0.5],
  };

  const transition: ComponentProps<typeof motion.div>['transition'] = {
    duration: durationUnit,
    ease: 'linear',
    repeat: Infinity,
  };

  return (
    <div className={cn('flex gap-[.15em]', className)} {...props}>
      <motion.div
        animate={animation}
        transition={{
          ...transition,
          delay: 0,
          repeatDelay: durationUnit * 2,
        }}
        className={cn(`${dotStyleCommon}`)}
      ></motion.div>

      <motion.div
        animate={animation}
        transition={{
          ...transition,
          delay: durationUnit * 1,
          repeatDelay: durationUnit * 2,
        }}
        className={cn(`${dotStyleCommon}`)}
      ></motion.div>

      <motion.div
        animate={animation}
        transition={{
          ...transition,
          delay: durationUnit * 2,
          repeatDelay: durationUnit * 2,
        }}
        className={cn(`${dotStyleCommon}`)}
      ></motion.div>
    </div>
  );
};

export default Loader;
