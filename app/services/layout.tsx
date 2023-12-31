import { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import styles from '@/app/services/ServicePage.module.scss';
import ServiceSearchBlock from '@/src/components/blocks/ServiceSearchBlock/ServiceSearchBlock';
import Header from '@/src/components/layout/Header/Header';
import PageWithPatch from '@/src/components/layout/PageWithPatch/PageWithPatch';

const ServicePageLayout: FC<PropsWith<'children', {}>> = ({ children }) => {
  return (
    <>
      <Header />

      <PageWithPatch
        proportion={'max-content max-content 1fr'}
        className={cn(styles.servicePageWrapper)}
      >
        <PageWithPatch.Aside className={cn(styles.searchBlock)}>
          <ServiceSearchBlock linkTagStyle={'alignLeft'} />
        </PageWithPatch.Aside>

        <PageWithPatch.Patch />

        <PageWithPatch.Main className={cn(styles.searchLayout)}>
          {children}
        </PageWithPatch.Main>
      </PageWithPatch>
    </>
  );
};

export default ServicePageLayout;
