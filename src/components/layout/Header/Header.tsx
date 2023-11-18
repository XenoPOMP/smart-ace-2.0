import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import Logo from '@/src/components/ui/Logo/Logo';
import Menu from '@/src/components/ui/Menu/Menu';
import Navbar from '@/src/components/ui/Navbar/Navbar';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: VariableFC<'header', HeaderProps, 'children'> = ({
  className,
  hideNav = false,
  hideMenu = false,
  splashBackground = false,
  ...props
}) => {
  const hiddenStyle = '!opacity-0 !pointer-events-none';

  return (
    <header
      className={cn(
        styles.appHeader,
        splashBackground && 'bg-background-primary',
        className
      )}
      {...props}
    >
      <UiContainer className={cn(styles.grid)}>
        <article
          className={cn(
            styles.cell,
            styles.left,
            '!justify-start',
            hideNav && hiddenStyle
          )}
        >
          <Navbar />
        </article>

        <article className={cn(styles.cell, styles.middle)}>
          <Logo className={cn(styles.logo, styles.desktop)} />

          <Logo className={cn(styles.logo, styles.mobile)} noText />
        </article>

        <article
          className={cn(styles.cell, '!justify-end', hideMenu && hiddenStyle)}
        >
          <Menu />
        </article>
      </UiContainer>
    </header>
  );
};

export default Header;
