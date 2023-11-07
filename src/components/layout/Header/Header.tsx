import cn from 'classnames';
import { FC } from 'react';

import Logo from '@/src/components/ui/Logo/Logo';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header>
      <UiContainer>
        <Logo />
      </UiContainer>
    </header>
  );
};

export default Header;
