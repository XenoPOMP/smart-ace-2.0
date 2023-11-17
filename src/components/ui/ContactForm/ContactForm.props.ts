import Link from 'next/link';
import { ComponentProps, useState } from 'react';

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
  caption?: string;
  subCaption?: string;
  items?: Array<FormItem>;
  links?: Partial<
    Record<'middle' | 'prev' | 'next', ComponentProps<typeof Link>['href']>
  >;
}
