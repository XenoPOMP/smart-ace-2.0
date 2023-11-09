import { PropsWith, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import Patch from '@/src/components/ui/Patch/Patch';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import Aside from './Aside';
import Main from './Main';
import styles from './PageWithPatch.module.scss';
import type { PageWithPatchProps } from './PageWithPatch.props';

const PageWithPatch: FC<PropsWith<'children', PageWithPatchProps> & {}> & {
  Main: VariableFC<typeof Main, {}>;
  Patch: VariableFC<typeof Patch, {}>;
  Aside: VariableFC<typeof Aside, {}>;
} = ({ children, proportion = '1fr max-content 1fr', ...props }) => {
  return (
    <UiContainer
      as={'div'}
      className={cn(styles.wrapper)}
      style={
        {
          '--propotion': proportion,
        } as CSSProperties
      }
      {...props}
    >
      {children}
    </UiContainer>
  );
};

PageWithPatch.Main = ({ className, ...props }) => {
  return <Main className={cn(styles.mainPageBlock, className)} {...props} />;
};

PageWithPatch.Patch = ({ ...props }) => {
  return <Patch {...props} />;
};

PageWithPatch.Aside = ({ className, ...props }) => {
  return <Aside className={cn(styles.mainPageBlock, className)} {...props} />;
};

export default PageWithPatch;
