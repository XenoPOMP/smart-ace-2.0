import { ComponentProps } from 'react';

import NavLink from '@/src/components/ui/NavLink/NavLink';

export const navLinkData: Array<
  Pick<ComponentProps<typeof NavLink>, 'href' | 'children'>
> = [
  {
    href: '/',
    children: 'Главная',
  },
  {
    href: '/services',
    children: 'Услуги',
  },
  {
    href: '/blog',
    children: 'Блог',
  },
];
