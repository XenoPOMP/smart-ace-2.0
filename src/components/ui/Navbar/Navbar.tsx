import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import NavLink from '@/src/components/ui/NavLink/NavLink';
import { navLinkData } from '@/src/data/nav-link.data';

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
        'select-none',
        className
      )}
      {...props}
    >
      <ul>
        {navLinkData.map((link, index) => {
          const { href, children } = link;

          return (
            <li key={`nav-item-${index}`}>
              <NavLink href={href}>{children}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
