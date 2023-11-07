'use client';

import { Dialog, Transition } from '@headlessui/react';
import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { ComponentProps, FC, Fragment } from 'react';

import styles from './MenuOverlay.module.scss';
import type { MenuOverlayProps } from './MenuOverlay.props';

const MenuOverlay: VariableFC<typeof motion.aside, MenuOverlayProps> = ({
  isOpen,
  closeModal,
  className,
  ...props
}) => {
  const animation: ComponentProps<typeof motion.aside>['initial'] = {
    opacity: isOpen ? 1 : 0,
    pointerEvents: isOpen ? 'all' : 'none',
  };

  return (
    <>
      <motion.aside
        initial={animation}
        animate={animation}
        className={cn(
          'bg-red-500 z-[100] fixed top-0 left-0',
          styles.dialog,
          className
        )}
      >
        Dialog
      </motion.aside>
    </>
  );
};

export default MenuOverlay;
