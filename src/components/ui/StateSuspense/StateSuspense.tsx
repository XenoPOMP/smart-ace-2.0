import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC, Suspense } from 'react';

import styles from './StateSuspense.module.scss';
import type { StateSuspenseProps } from './StateSuspense.props';

/**
 * Works similar to {@link Suspense}, but it takes additional
 * prop - **_isLoading_**, which is React state variable.
 *
 * @param children
 * @param fallback
 * @param isLoading
 * @constructor
 */
const StateSuspense: VariableFC<
  typeof Suspense,
  StateSuspenseProps,
  'unstable_expectedLoadTime'
> = ({ children, fallback, isLoading }) => {
  return <>{isLoading ? fallback : children}</>;
};

export default StateSuspense;
