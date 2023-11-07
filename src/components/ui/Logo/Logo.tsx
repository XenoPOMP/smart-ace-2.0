import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import CustomLink from '@/src/components/ui/CustomLink/CustomLink';
import { AmazingGrotesk } from '@/src/fonts/AmazingGrotesk';

import styles from './Logo.module.scss';
import type { LogoProps } from './Logo.props';

const font = AmazingGrotesk;

const Logo: FC<LogoProps> = ({}) => {
  return (
    <CustomLink className={cn(font.className, 'font-[900]')} href={'/'}>
      Logo
    </CustomLink>
  );
};

export default Logo;
