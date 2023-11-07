'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

import CustomLink from '@/src/components/ui/CustomLink/CustomLink';

import styles from '../Navbar/Navbar.module.scss';

import type { NavLinkProps } from './NavLink.props';

const NavLink: VariableFC<typeof CustomLink, NavLinkProps, 'applyStyles'> = ({
  className,
  children,
  href,
  ...navLinkProps
}) => {
  const pathName = usePathname();

  const isThisPageCurrent = pathName === href;

  return (
    <CustomLink
      className={cn(className, !isThisPageCurrent && styles.notActive)}
      href={href}
      applyStyles={false}
      {...navLinkProps}
    >
      {children}
    </CustomLink>
  );
};

export default NavLink;
