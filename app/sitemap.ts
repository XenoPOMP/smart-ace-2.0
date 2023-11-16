import { MetadataRoute } from 'next';

import { servicesData } from '@/src/data/services.data';

const CANONICAL_URL = process.env.CANONICAL_URL;

const sitemap = (): MetadataRoute.Sitemap => {
  const generateServicePages = (): MetadataRoute.Sitemap => {
    const result: MetadataRoute.Sitemap = [];

    // Add hub page
    result.push(
      ...[
        {
          url: `${CANONICAL_URL}/services`,
          priority: 0.9,
        },
      ]
    );

    // Add each service`s page
    servicesData.groups
      .flatMap(group => group.services)
      .flat()
      .forEach(({ id }) => {
        result.push(
          ...[
            {
              url: `${CANONICAL_URL}/services/${id}`,
              priority: 0.85,
            },
            {
              url: `${CANONICAL_URL}/services/${id}/order/1`,
              priority: 0.8,
            },
            {
              url: `${CANONICAL_URL}/services/${id}/order/2`,
              priority: 0.8,
            },
            {
              url: `${CANONICAL_URL}/services/${id}/order/3`,
              priority: 0.8,
            },
          ]
        );
      });

    return result;
  };

  return [
    {
      url: `${CANONICAL_URL}`,
      priority: 1,
    },
    ...generateServicePages(),
  ];
};

export default sitemap;
