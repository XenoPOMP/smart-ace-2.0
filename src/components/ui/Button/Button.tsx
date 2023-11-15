'use client';

import { Defined, VariableFC } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import cn from 'classnames';
import { CSSProperties, ComponentProps, FC } from 'react';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

const Button: VariableFC<'button', ButtonProps> = ({
  className,
  variant = 'default',
  blocked = false,
  onClick,
  ...props
}) => {
  const inlineStyles: Record<
    Defined<typeof variant>,
    Pick<ComponentProps<'button'>, 'className'>
  > = {
    default: {
      className: '',
    },

    headerRound: {
      className: cn(styles.header, styles.round),
    },

    secondary: {
      className: cn(styles.secondary),
    },

    error: {
      className: 'bg-red-500 text-white',
    },
  };

  return (
    <button
      className={cn(
        styles.appButton,
        inlineStyles[variant].className,
        blocked && styles.blocked,
        className
      )}
      onClick={ev => {
        if (!blocked && !isUndefined(onClick)) {
          onClick(ev);
        }
      }}
      {...props}
    />
  );
};

export default Button;
