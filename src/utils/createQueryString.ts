import { getObjectKeys } from '@xenopomp/advanced-utils';

/**
 * Creates query params.
 *
 * @param query
 */
export const createQueryString = <Q extends string>(
  query: Record<Q, string>
): string => {
  const allKeys = getObjectKeys(query);

  return allKeys
    .map(key => {
      const item = query[key];

      return `${key}=${item}`;
    })
    .join('&');
};
