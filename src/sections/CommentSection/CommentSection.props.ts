import { ComponentProps } from 'react';

import ServiceWithIdPage from '@/app/services/[serviceId]/page';

export interface CommentSectionProps
  extends Pick<
    ComponentProps<typeof ServiceWithIdPage>['params'],
    'serviceId'
  > {
  sessionId: string;
}
