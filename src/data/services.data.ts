import { IService } from '@/src/interfaces/Service.interface';

export const servicesData: {
  version: number;
  groups: Array<{
    title: string;
    services: Array<IService & { version: number }>;
  }>;
} = {
  version: 1,
  groups: [
    {
      title: 'Веб-разработка',
      services: [
        {
          version: 1,
          id: 1,
          title: 'Лендинг',
          desc: 'Закажите лендинг- и получите эффективный инструмент для привлечения клиентов и увеличения продаж.',
        },
        {
          version: 1,
          id: 2,
          title: 'Интернет-магазин',
        },
      ],
    },
  ],
};
