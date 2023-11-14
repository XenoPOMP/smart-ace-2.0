import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from './LoadingRect.module.scss';
import type { LoadingRectProps } from './LoadingRect.props';

const LoadingRect: VariableFC<'div', LoadingRectProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn('rounded-[5px]', 'animate-pulse', className)}
      style={{
        animationDuration: '2s',
      }}
    ></div>
  );
};

export default LoadingRect;
