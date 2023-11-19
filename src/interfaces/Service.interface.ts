import { ArrayType } from '@xenopomp/advanced-types';

import { servicesData } from '@/src/data/services.data';

export enum Hardness {
  Easy,
  Medium,
  Hard,
  Hardcore,
}

export interface IService {
  id: number;
  title: string;
  desc?: string;

  minPrice?: number;
  isPaymentMonthly?: boolean;

  executionTime?: [number, number];
  isExecutedImmediately?: boolean;

  hardness?: Hardness;
}

export type IExtendedService = ArrayType<
  ArrayType<typeof servicesData['groups']>['services']
>;
