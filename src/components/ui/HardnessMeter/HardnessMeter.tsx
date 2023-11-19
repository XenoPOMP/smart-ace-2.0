import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import { Hardness } from '@/src/interfaces/Service.interface';

import styles from './HardnessMeter.module.scss';
import type { HardnessMeterProps } from './HardnessMeter.props';

const HardnessMeter: VariableFC<
  'div',
  HardnessMeterProps,
  'children' | 'aria-valuemin' | 'aria-valuemax' | 'aria-valuenow'
> = ({ hardness, ...props }) => {
  return (
    <div
      role={'progressbar'}
      aria-valuemin={Hardness.Easy}
      aria-valuemax={Hardness.Hardcore}
      aria-valuenow={hardness}
      {...props}
    >
      Hard level: {hardness}
    </div>
  );
};

export default HardnessMeter;
