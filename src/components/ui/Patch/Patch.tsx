import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from './Patch.module.scss';
import type { PatchProps } from './Patch.props';

const Patch: VariableFC<'section', PatchProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn(className)} {...props}>
      Patch
    </section>
  );
};

export default Patch;
