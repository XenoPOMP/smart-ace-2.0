'use client';

import { Dialog, Transition } from '@headlessui/react';
import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { ComponentProps, FC, Fragment } from 'react';

import CustomLink from '@/src/components/ui/CustomLink/CustomLink';
import { navLinkData } from '@/src/data/nav-link.data';

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
          'z-[100] fixed bottom-0 right-0',
          styles.dialog,
          className
        )}
      >
        <section className={cn('', styles.menu)}>
          {navLinkData.map((link, index) => {
            const { href, children } = link;

            return (
              <CustomLink
                href={href}
                applyStyles={false}
                key={`menu-link-${index}`}
                className={cn('w-max')}
              >
                {children}
              </CustomLink>
            );
          })}
        </section>
      </motion.aside>
    </>
  );
};

export default MenuOverlay;
