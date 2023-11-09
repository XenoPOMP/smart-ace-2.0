import { VariableFC } from '@xenopomp/advanced-types';
import { FC } from 'react';

const Main: VariableFC<'main', {}> = ({ ...props }) => {
  return <main {...props}></main>;
};

export default Main;
