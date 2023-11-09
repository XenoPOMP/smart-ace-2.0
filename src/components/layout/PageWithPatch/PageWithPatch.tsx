import { PropsWith, VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { CSSProperties, FC } from 'react';

import Patch from '@/src/components/ui/Patch/Patch';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import Aside from './Aside';
import Main from './Main';
import styles from './PageWithPatch.module.scss';
import type { PageWithPatchProps } from './PageWithPatch.props';

interface BlockSharedProps {
  hasTopPadding?: boolean;
}

const PageWithPatch: VariableFC<'div', PageWithPatchProps> & {
  Main: VariableFC<typeof Main, BlockSharedProps & {}>;
  Patch: VariableFC<typeof Patch, BlockSharedProps & {}>;
  Aside: VariableFC<typeof Aside, BlockSharedProps & {}>;
} = ({ children, className, proportion = '1fr max-content 1fr', ...props }) => {
  return (
    <UiContainer
      as={'div'}
      className={cn(styles.wrapper, className)}
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

PageWithPatch.Main = ({ className, hasTopPadding = true, ...props }) => {
  return (
    <Main
      className={cn(styles.mainPageBlock, className, !hasTopPadding && '!py-0')}
      {...props}
    />
  );
};

PageWithPatch.Patch = ({ ...props }) => {
  return <Patch {...props} />;
};

PageWithPatch.Aside = ({ className, hasTopPadding = true, ...props }) => {
  return (
    <Aside
      className={cn(styles.mainPageBlock, className, !hasTopPadding && '!py-0')}
      {...props}
    />
  );
};

export default PageWithPatch;
