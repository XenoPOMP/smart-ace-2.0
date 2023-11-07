import { Defined, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { CSSProperties, ComponentProps, FC } from 'react';

import styles from './Button.module.scss';
import type { ButtonProps } from './Button.props';

const Button: VariableFC<'button', ButtonProps> = ({
  className,
  variant = 'default',
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
  };

  return (
    <button
      className={cn(
        styles.appButton,
        inlineStyles[variant].className,
        className
      )}
      {...props}
    />
  );
};

export default Button;
