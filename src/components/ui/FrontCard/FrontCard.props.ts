import { SelectivePartial } from '@xenopomp/advanced-types';
import { ComponentProps } from 'react';

import CustomLink from '@/src/components/ui/CustomLink/CustomLink';

export interface FrontCardProps
  extends SelectivePartial<
    Pick<ComponentProps<typeof CustomLink>, 'href'>,
    'href'
  > {
  title?: string;
  subTitle?: string;
  desc?: string;
}
