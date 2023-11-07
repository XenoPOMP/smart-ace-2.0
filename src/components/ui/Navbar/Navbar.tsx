import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import NavLink from '@/src/components/ui/NavLink/NavLink';

import styles from './Navbar.module.scss';
import type { NavbarProps } from './Navbar.props';

const Navbar: VariableFC<'nav', NavbarProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <nav
      className={cn(
        styles.appNav,
        'bg-head-button-back px-[1.5em] rounded-[2.5em]',
        className
      )}
      {...props}
    >
      <ul>
        <li>
          <NavLink href={'/'}>Главная</NavLink>
        </li>

        <li>
          <NavLink href={'/services'}>Услуги</NavLink>
        </li>

        <li>
          <NavLink href={'/blog'}>Блог</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
