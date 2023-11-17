import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { Metadata } from 'next';
import { FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import Header from '@/src/components/layout/Header/Header';
import PageWithPatch from '@/src/components/layout/PageWithPatch/PageWithPatch';
import { generateMetadata } from '@/src/utils/generateMetadata';

import styles from './OrderLayout.module.scss';

export const metadata: Metadata = generateMetadata({
  title: `Заказ`,
  description: 'Страница заказа услуги',

  robots: {
    noIndex: true,
    noFollow: true,
  },

  openGraph: {
    ...AppConstants.sharedOpenGraphConfig,

    images: [...(AppConstants.sharedOpenGraphConfig.images ?? [])],
  },
});

const OrderPageLayout: FC<PropsWith<'children', {}>> = ({ children }) => {
  return (
    <>
      <Header hideNav hideMenu splashBackground />

      <PageWithPatch proportion={'max-content'} className={cn(styles.wrapper)}>
        <PageWithPatch.Main
          style={
            {
              // paddingLeft: 'var(--global-padding)',
              // paddingRight: 'var(--global-padding)',
              // paddingBottom: 'var(--global-padding)',
              // gridColumn: 'span 2',
            }
          }
          className={cn(styles.order)}
        >
          {children}
        </PageWithPatch.Main>
      </PageWithPatch>
    </>
  );
};

export default OrderPageLayout;
