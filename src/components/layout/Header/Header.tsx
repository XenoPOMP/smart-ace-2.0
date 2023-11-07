import cn from 'classnames';
import { FC } from 'react';

import Logo from '@/src/components/ui/Logo/Logo';
import Menu from '@/src/components/ui/Menu/Menu';
import Navbar from '@/src/components/ui/Navbar/Navbar';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className={cn(styles.appHeader)}>
      <UiContainer className={cn(styles.grid)}>
        <article className={cn(styles.cell, '!justify-start')}>
          <Navbar />
        </article>

        <article className={cn(styles.cell)}>
          <Logo />
        </article>

        <article className={cn(styles.cell, '!justify-end')}>
          <Menu />
        </article>
      </UiContainer>
    </header>
  );
};

export default Header;
