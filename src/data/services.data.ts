import { Hardness, IService } from '@/src/interfaces/Service.interface';

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
          minPrice: 10000,
          executionTime: [2, 6],
          hardness: Hardness.Easy,
        },

        {
          version: 1,
          id: 2,
          title: 'Интернет-магазин',
          // desc: 'Закажите лендинг- и получите эффективный инструмент для привлечения клиентов и увеличения продаж.',
          minPrice: 25000,
          executionTime: [5, 12],
          hardness: Hardness.Hard,
        },

        {
          version: 1,
          id: 3,
          title: 'Веб-портал',
          desc: 'Многостраничный сайт, предоставляющий пользователю различные интерактивные интернет-сервисы, которые работают в рамках этого сайта.',
          minPrice: 35000,
          executionTime: [8, 16],
          hardness: Hardness.Hardcore,
        },
      ],
    },

    {
      title: 'Хостинг',
      services: [
        {
          version: 1,
          id: 4,
          title: 'VPS сервер',
          desc: 'Виртуальный приватный сервер, машина, на которой находится все программное обеспечение и все данные, необходимые для работы веб-сайта или приложения.',
          minPrice: 1000,
          isPaymentMonthly: true,
          executionTime: [0, 0],
          isExecutedImmediately: true,
          hardness: Hardness.Easy,
        },

        {
          version: 1,
          id: 5,
          title: 'Хостинг сайта',
          desc: 'Закажите выделенный web-сервер для вашего сайта.',
          minPrice: 850,
          isPaymentMonthly: true,
          executionTime: [0, 0],
          isExecutedImmediately: true,
          hardness: Hardness.Easy,
        },
      ],
    },
  ],
};
