import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { MoveLeft } from 'lucide-react';
import { FC } from 'react';

import Button from '@/src/components/ui/Button/Button';
import CustomLink from '@/src/components/ui/CustomLink/CustomLink';

import styles from './ServiceFooterBlock.module.scss';
import type { ServiceFooterBlockProps } from './ServiceFooterBlock.props';

const ServiceFooterBlock: VariableFC<
  'footer',
  ServiceFooterBlockProps,
  'children'
> = ({ className, serviceId, ...props }) => {
  return (
    <footer className={cn(styles.service, className)} {...props}>
      <CustomLink
        href={'/services'}
        applyStyles={false}
        className={cn('inline-block')}
      >
        <Button
          variant={'header'}
          className={cn('aspect-square rounded-[1em]')}
        >
          <MoveLeft />
        </Button>
      </CustomLink>

      <CustomLink
        href={`/order/${serviceId}/stage/1`}
        className={cn('flex-grow z-2')}
        style={{
          pointerEvents: 'all',
        }}
        applyStyles={false}
      >
        <Button
          variant={'secondary'}
          className={cn(
            'rounded-[.65em] py-[.9em] px-[1.35em] font-semibold w-full'
          )}
        >
          Заказать услугу
        </Button>
      </CustomLink>
    </footer>
  );
};

export default ServiceFooterBlock;
