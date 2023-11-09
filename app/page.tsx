import cn from 'classnames';
import { Balsamiq_Sans } from 'next/font/google';

import PageWithPatch from '@/src/components/layout/PageWithPatch/PageWithPatch';
import FrontCard from '@/src/components/ui/FrontCard/FrontCard';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './MainPage.module.scss';

const specialFont = Balsamiq_Sans({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <PageWithPatch
      proportion={'4fr max-content 585px'}
      className={cn(styles.pageWrapper)}
    >
      <PageWithPatch.Main className={cn(styles.mainPage)} hasTopPadding={false}>
        <h1 className={cn(specialFont.className)}>
          Вам нужно что-то особенное?
        </h1>

        <p>Пожалуйста, посмотрите на наши предложения</p>
      </PageWithPatch.Main>

      <PageWithPatch.Patch />

      <PageWithPatch.Aside className={cn(styles.mainPage)}>
        <FrontCard
          title={'Очень важное заявление'}
          subTitle={'Наше передовое программное обеспечение позволяет вам...'}
          desc={'Крутота блин реально ихихихихихихихихихихиххх'}
        />

        <FrontCard
          title={'Очень важное заявление'}
          subTitle={'Наше передовое программное обеспечение позволяет вам...'}
          desc={'Крутота блин реально ихихихихихихихихихихиххх'}
        />
      </PageWithPatch.Aside>
    </PageWithPatch>
  );
}
