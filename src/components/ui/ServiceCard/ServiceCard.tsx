import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from './ServiceCard.module.scss';
import type { ServiceCardProps } from './ServiceCard.props';

const ServiceCard: VariableFC<'article', ServiceCardProps> = ({
  children,
  className,
  title,
  ...props
}) => {
  return (
    <article className={cn(styles.card, className)}>
      <div className={cn(styles.children, '!font-medium')}>{children}</div>

      <footer>
        <h3>{title}</h3>
      </footer>
    </article>
  );
};

export default ServiceCard;
