import cn from 'classnames';

import PageWithPatch from '@/src/components/layout/PageWithPatch/PageWithPatch';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './MainPage.module.scss';

export default function Home() {
  return (
    <PageWithPatch proportion={'4fr max-content 585px'}>
      <PageWithPatch.Main>Sus</PageWithPatch.Main>

      <PageWithPatch.Patch className={cn('bg-red-500 text-black px-[.5rem]')} />

      <PageWithPatch.Aside>Aside</PageWithPatch.Aside>
    </PageWithPatch>
  );
}
