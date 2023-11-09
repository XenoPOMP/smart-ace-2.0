import { VariableFC } from '@xenopomp/advanced-types';
import { FC } from 'react';

const Aside: VariableFC<'aside', {}> = ({ ...props }) => {
  return <aside {...props} />;
};

export default Aside;
