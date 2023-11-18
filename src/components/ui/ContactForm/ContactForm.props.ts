import Link from 'next/link';
import { ComponentProps, ReactNode, useState } from 'react';

type ReactState<T extends any = any> = {
  state: ReturnType<typeof useState<T>>[0];
  setState: ReturnType<typeof useState<T>>[1];
};

type FormItem = {
  title: string;
  placeholder?: string;
  help?: string;
  reactState: ReactState;
  type?: 'default' | 'email';
};

export interface ContactFormProps {
  caption?: ReactNode;
  subCaption?: ReactNode;
  items?: Array<FormItem>;
  links?: Partial<
    Record<'middle' | 'prev' | 'next', ComponentProps<typeof Link>['href']>
  >;
}
