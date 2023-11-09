import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';
import { isFirefox, isMobile } from 'react-device-detect';

import Marquee from '@/src/components/ui/Marquee/Marquee';

import styles from './Patch.module.scss';
import type { PatchProps } from './Patch.props';

const Patch: VariableFC<'section', PatchProps, 'children'> = ({
  className,
  ...props
}) => {
  const InnerTagBlock: FC = () => {
    return (
      <>
        {[...new Array(70)].map((_, i) => {
          return (
            <>
              <div key={`tag-${i}`} className={cn(styles.tag)}>
                smartace
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <section className={cn(className)} {...props}>
      <Marquee
        className={cn(styles.runningLine)}
        direction={'up'}
        as={isMobile || isFirefox ? 'div' : 'marquee'}
      >
        <InnerTagBlock />
      </Marquee>
    </section>
  );
};

export default Patch;
