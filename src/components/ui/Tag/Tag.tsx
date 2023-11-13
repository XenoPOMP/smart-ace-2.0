import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from './Tag.module.scss';
import type { TagProps } from './Tag.props';

const Tag: VariableFC<'div', TagProps> = ({
  className,
  children,
  ...props
}) => {
  const padding: number = 0.35 / 2;

  return (
    <div
      className={cn('uppercase font-semibold rounded-[1em]', className)}
      style={{
        fontSize: `calc(1em - ${padding * 2}em)`,
        padding: `${padding}em ${padding * 5}em`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Tag;
