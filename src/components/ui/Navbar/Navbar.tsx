import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from './Navbar.module.scss';
import type { NavbarProps } from './Navbar.props';

const Navbar: VariableFC<'nav', NavbarProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <nav className={cn(className)} {...props}>
      Navbar
    </nav>
  );
};

export default Navbar;
