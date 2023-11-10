import { WithSearchParams } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { FC } from 'react';

import ServiceSearchBlock from '@/src/components/blocks/ServiceSearchBlock/ServiceSearchBlock';
import PageWithPatch from '@/src/components/layout/PageWithPatch/PageWithPatch';

import styles from './ServicePage.module.scss';

const ServicePage: FC<WithSearchParams<{}, 'q'>> = ({ searchParams }) => {
  const { q } = searchParams;

  return (
    <PageWithPatch
      proportion={'max-content max-content 1fr'}
      className={cn(styles.servicePageWrapper)}
    >
      <PageWithPatch.Aside className={cn(styles.searchBlock)}>
        <ServiceSearchBlock initialQuery={q} />
      </PageWithPatch.Aside>

      <PageWithPatch.Patch />

      <PageWithPatch.Main>Sus</PageWithPatch.Main>
    </PageWithPatch>
  );
};

export default ServicePage;
